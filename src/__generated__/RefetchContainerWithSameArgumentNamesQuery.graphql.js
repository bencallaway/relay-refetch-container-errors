/**
 * @flow
 * @relayHash 7d8ee4f35f8dcaef18ac9c93588faa08
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RefetchContainerWithSameArgumentNames_viewer$ref = any;
export type RefetchContainerWithSameArgumentNamesQueryVariables = {|
  queryFlag: boolean
|};
export type RefetchContainerWithSameArgumentNamesQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: RefetchContainerWithSameArgumentNames_viewer$ref
  |}
|};
export type RefetchContainerWithSameArgumentNamesQuery = {|
  variables: RefetchContainerWithSameArgumentNamesQueryVariables,
  response: RefetchContainerWithSameArgumentNamesQueryResponse,
|};
*/


/*
query RefetchContainerWithSameArgumentNamesQuery(
  $queryFlag: Boolean!
) {
  viewer {
    ...RefetchContainerWithSameArgumentNames_viewer_1YGG1u
    id
  }
}

fragment RefetchContainerWithSameArgumentNames_viewer_1YGG1u on Viewer {
  foo
  bar @include(if: $queryFlag)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "queryFlag",
    "type": "Boolean!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RefetchContainerWithSameArgumentNamesQuery",
  "id": null,
  "text": "query RefetchContainerWithSameArgumentNamesQuery(\n  $queryFlag: Boolean!\n) {\n  viewer {\n    ...RefetchContainerWithSameArgumentNames_viewer_1YGG1u\n    id\n  }\n}\n\nfragment RefetchContainerWithSameArgumentNames_viewer_1YGG1u on Viewer {\n  foo\n  bar @include(if: $queryFlag)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RefetchContainerWithSameArgumentNamesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "RefetchContainerWithSameArgumentNames_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "refetchFlag",
                "variableName": "queryFlag",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RefetchContainerWithSameArgumentNamesQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "foo",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryFlag",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "bar",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eba7dddde226d7e9d7cbe6cff6fdbfce';
module.exports = node;
