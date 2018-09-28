import fetch from "node-fetch";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

export const TEST_GRAPHQL_URL = "http://example.com/graphql";

export { default as queryMock } from "./queryMock";

export function createNetwork(url) {
  return Network.create((operation, variables) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: operation.name, // Relay Modern exposes this when calling the fetchQuery function. We need to pass it to make sure our query mock knows the name of the query
        query: operation.text,
        variables
      })
    }).then(res => res.json());
  });
}

export function createEnvironment(network) {
  const store = new Store(new RecordSource());
  return new Environment({ network, store });
}

export function createTestEnvironment() {
  return createEnvironment(createNetwork(TEST_GRAPHQL_URL));
}
