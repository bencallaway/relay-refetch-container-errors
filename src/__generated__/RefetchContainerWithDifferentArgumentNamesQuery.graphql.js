/**
 * @flow
 * @relayHash 1d1ae11fd50c4635e96d7618b857baf7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RefetchContainerWithDifferentArgumentNames_viewer$ref = any;
export type RefetchContainerWithDifferentArgumentNamesQueryVariables = {|
  queryFlag: boolean
|};
export type RefetchContainerWithDifferentArgumentNamesQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: RefetchContainerWithDifferentArgumentNames_viewer$ref
  |}
|};
export type RefetchContainerWithDifferentArgumentNamesQuery = {|
  variables: RefetchContainerWithDifferentArgumentNamesQueryVariables,
  response: RefetchContainerWithDifferentArgumentNamesQueryResponse,
|};
*/


/*
query RefetchContainerWithDifferentArgumentNamesQuery(
  $queryFlag: Boolean!
) {
  viewer {
    ...RefetchContainerWithDifferentArgumentNames_viewer_1YGG1u
    id
  }
}

fragment RefetchContainerWithDifferentArgumentNames_viewer_1YGG1u on Viewer {
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
  "name": "RefetchContainerWithDifferentArgumentNamesQuery",
  "id": null,
  "text": "query RefetchContainerWithDifferentArgumentNamesQuery(\n  $queryFlag: Boolean!\n) {\n  viewer {\n    ...RefetchContainerWithDifferentArgumentNames_viewer_1YGG1u\n    id\n  }\n}\n\nfragment RefetchContainerWithDifferentArgumentNames_viewer_1YGG1u on Viewer {\n  foo\n  bar @include(if: $queryFlag)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RefetchContainerWithDifferentArgumentNamesQuery",
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
            "name": "RefetchContainerWithDifferentArgumentNames_viewer",
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
    "name": "RefetchContainerWithDifferentArgumentNamesQuery",
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
(node/*: any*/).hash = 'e95fda46cf0c36782e4e7ccc8471737c';
module.exports = node;
