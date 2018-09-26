import React from 'react';
import { QueryRenderer, createRefetchContainer, graphql } from 'react-relay';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import { createTestEnvironment, queryMock } from './helpers';

const INITIAL_QUERY_NAME = 'DefinedLocallyOnFragmentQuery';
const REFETCH_QUERY_NAME = 'DefinedLocallyOnFragmentRefetchQuery';
const MOCK_DATA = {
  viewer: {
    id: '1',
    foo: 'Foo Value',
    bar: 'Bar Data'
  }
};

describe('DefinedLocallyOnFragment', () => {
  let environment;
  let relayProp;
  let TestApp;

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

    const DefinedLocallyOnFragment = createRefetchContainer(
      TestComponent,
      {
        viewer: graphql`
          fragment DefinedLocallyOnFragment_viewer on Viewer
            @argumentDefinitions(childFlag: { type: "Boolean!" }) {
            foo
            bar @include(if: $childFlag)
          }
        `
      },
      graphql`
        query DefinedLocallyOnFragmentRefetchQuery($parentFlag: Boolean!) {
          viewer {
            ...DefinedLocallyOnFragment_viewer
              @arguments(childFlag: $parentFlag)
          }
        }
      `
    );

    TestApp = appProps => (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query DefinedLocallyOnFragmentQuery($parentFlag: Boolean!) {
            viewer {
              ...DefinedLocallyOnFragment_viewer
                @arguments(childFlag: $parentFlag)
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
            return <DefinedLocallyOnFragment viewer={viewer} />;
          }
          return <div>LOADING...</div>;
        }}
      />
    );
  });

  describe('when fetching the initial query', () => {
    it('hides "Bar Data" when $parentFlag is false', async () => {
      const variables = {
        parentFlag: false
      };
      queryMock.mockQuery({
        name: INITIAL_QUERY_NAME,
        variables,
        data: MOCK_DATA
      });
      const wrapper = mount(<TestApp {...variables} />);
      await waitForElement(wrapper, '.foo', { logStructureOnTimeout: false });
      wrapper.update();
      expect(wrapper).toHaveText('Foo Value');
      expect(wrapper).not.toHaveText('Bar Data');
    });

    it('shows "Bar Data" when $parentFlag is true', async () => {
      const variables = {
        parentFlag: true
      };
      queryMock.mockQuery({
        name: INITIAL_QUERY_NAME,
        variables,
        data: MOCK_DATA
      });
      const wrapper = mount(<TestApp {...variables} />);
      await waitForElement(wrapper, '.foo', { logStructureOnTimeout: false });
      wrapper.update();
      expect(wrapper).toHaveText('Foo ValueBar Data');
      expect(wrapper).not.toHaveText('Bar Data');
    });
  });

  describe('when refetching after initially setting $parentFlag to false', () => {
    let wrapper;

    beforeEach(async () => {
      const initialVariables = {
        parentFlag: false
      };
      queryMock.mockQuery({
        name: INITIAL_QUERY_NAME,
        variables: initialVariables,
        data: MOCK_DATA
      });
      wrapper = mount(<TestApp {...initialVariables} />);
      await waitForElement(wrapper, '.foo');
      wrapper.update();
    });

    it('**UNEXPECTED INVARIANT VIOLATION** continues to hide "Bar Data" when $parentFlag is false', async () => {
      const refetchVariables = {
        parentFlag: false
      };
      queryMock.mockQuery({
        name: REFETCH_QUERY_NAME,
        variables: refetchVariables,
        data: MOCK_DATA
      });
      relayProp.refetch(refetchVariables);
      try {
        await waitForElement(wrapper, '.bar', { logStructureOnTimeout: false });
        expect('Above wait should time out').toBe(false);
      } catch (e) {
        wrapper.update();
        expect(wrapper).toHaveText('Foo Value');
        expect(wrapper).not.toHaveText('Bar Data');
      }
    });

    it('**UNEXPECTED INVARIANT VIOLATION** shows "Bar Data" when $parentFlag is true', async () => {
      const refetchVariables = {
        parentFlag: true
      };
      queryMock.mockQuery({
        name: REFETCH_QUERY_NAME,
        variables: refetchVariables,
        data: MOCK_DATA
      });
      relayProp.refetch(refetchVariables);
      try {
        await waitForElement(wrapper, '.bar', { logStructureOnTimeout: false });
        wrapper.update();
        expect(wrapper).toHaveText('Foo ValueBar Data');
        expect(wrapper).not.toHaveText('Bar Data');
      } catch (e) {}
    });
  });
});
