import React from "react";
import { QueryRenderer, createRefetchContainer, graphql } from "react-relay";
import { mount } from "enzyme";
import { waitForElement } from "enzyme-async-helpers";
import { createTestEnvironment, queryMock } from "./helpers";

const INITIAL_QUERY_NAME = "RefetchContainerWithSameArgumentNamesQuery";
const REFETCH_QUERY_NAME = "RefetchContainerWithSameArgumentNamesRefetchQuery";
const MOCK_DATA = {
  viewer: {
    id: "1",
    foo: "Foo Value",
    bar: "Bar Data"
  }
};

describe("RefetchContainerWithSameArgumentNames", () => {
  let environment;
  let relayProp;
  let TestApp;

  async function mountApp(variables) {
    queryMock.mockQuery({
      name: INITIAL_QUERY_NAME,
      variables,
      data: MOCK_DATA
    });
    const wrapper = mount(<TestApp {...variables} />);
    await waitForElement(wrapper, ".foo");
    wrapper.update();
    return wrapper;
  }

  function refetch(variables) {
    queryMock.mockQuery({
      name: REFETCH_QUERY_NAME,
      variables,
      data: MOCK_DATA
    });
    relayProp.refetch(variables);
  }

  beforeEach(() => {
    environment = createTestEnvironment();

    class TestComponent extends React.Component {
      constructor(props) {
        super(props);
        relayProp = props.relay;
      }

      render() {
        const { foo, bar } = this.props.viewer;
        return (
          <div>
            <span className="foo">{foo}</span>
            {bar && <span className="bar">{bar}</span>}
          </div>
        );
      }
    }

    const RefetchContainerWithSameArgumentNames = createRefetchContainer(
      TestComponent,
      {
        viewer: graphql`
          fragment RefetchContainerWithSameArgumentNames_viewer on Viewer
            @argumentDefinitions(refetchFlag: { type: "Boolean!" }) {
            foo
            bar @include(if: $refetchFlag)
          }
        `
      },
      graphql`
        query RefetchContainerWithSameArgumentNamesRefetchQuery(
          $refetchFlag: Boolean!
        ) {
          viewer {
            ...RefetchContainerWithSameArgumentNames_viewer
              @arguments(refetchFlag: $refetchFlag)
          }
        }
      `
    );

    TestApp = appProps => (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query RefetchContainerWithSameArgumentNamesQuery(
            $queryFlag: Boolean!
          ) {
            viewer {
              ...RefetchContainerWithSameArgumentNames_viewer
                @arguments(refetchFlag: $queryFlag)
            }
          }
        `}
        variables={appProps}
        render={({ props, error }) => {
          if (error) {
            return <div>ERROR: {error.message}</div>;
          }
          if (props && props.viewer) {
            const { viewer } = props;
            return <RefetchContainerWithSameArgumentNames viewer={viewer} />;
          }
          return <div>LOADING...</div>;
        }}
      />
    );
  });

  describe("when fetching the initial query", () => {
    it('hides "Bar Data" when $queryFlag is false', async () => {
      const wrapper = await mountApp({ queryFlag: false });
      expect(wrapper).toHaveText("Foo Value");
      expect(wrapper).not.toHaveText("Bar Data");
    });

    it("what happens when I render the app twice?", async () => {
      const wrapper = await mountApp({ queryFlag: true });
      expect(wrapper).toHaveText("Foo ValueBar Data");
    });
  });

  describe("when refetching after initially setting $queryFlag to false", () => {
    let wrapper;

    beforeEach(async () => {
      wrapper = await mountApp({ queryFlag: false });
    });

    it('continues to hide "Bar Data" when $refetchFlag is false', async () => {
      refetch({ refetchFlag: false });
      try {
        await waitForElement(wrapper, ".bar", { logStructureOnTimeout: false });
        expect("Above wait should time out").toBe(false);
      } catch (e) {
        wrapper.update();
        expect(wrapper).toHaveText("Foo Value");
        expect(wrapper).not.toHaveText("Bar Data");
      }
    });

    it('shows "Bar Data" when $refetchFlag is true', async () => {
      refetch({ refetchFlag: true });
      await waitForElement(wrapper, ".bar", { logStructureOnTimeout: false });
      wrapper.update();
      expect(wrapper).toHaveText("Foo ValueBar Data");
      expect(wrapper).not.toHaveText("Bar Data");
    });
  });
});
