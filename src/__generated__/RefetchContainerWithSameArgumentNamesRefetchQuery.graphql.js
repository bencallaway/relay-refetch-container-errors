/**
 * @flow
 * @relayHash 2d9188e53d71ee78e0b62be87d497574
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RefetchContainerWithSameArgumentNames_viewer$ref = any;
export type RefetchContainerWithSameArgumentNamesRefetchQueryVariables = {|
  refetchFlag: boolean
|};
export type RefetchContainerWithSameArgumentNamesRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: RefetchContainerWithSameArgumentNames_viewer$ref
  |}
|};
export type RefetchContainerWithSameArgumentNamesRefetchQuery = {|
  variables: RefetchContainerWithSameArgumentNamesRefetchQueryVariables,
  response: RefetchContainerWithSameArgumentNamesRefetchQueryResponse,
|};
*/


/*
query RefetchContainerWithSameArgumentNamesRefetchQuery(
  $refetchFlag: Boolean!
) {
  viewer {
    ...RefetchContainerWithSameArgumentNames_viewer_2vA6b5
    id
  }
}

fragment RefetchContainerWithSameArgumentNames_viewer_2vA6b5 on Viewer {
  foo
  bar @include(if: $refetchFlag)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "refetchFlag",
    "type": "Boolean!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RefetchContainerWithSameArgumentNamesRefetchQuery",
  "id": null,
  "text": "query RefetchContainerWithSameArgumentNamesRefetchQuery(\n  $refetchFlag: Boolean!\n) {\n  viewer {\n    ...RefetchContainerWithSameArgumentNames_viewer_2vA6b5\n    id\n  }\n}\n\nfragment RefetchContainerWithSameArgumentNames_viewer_2vA6b5 on Viewer {\n  foo\n  bar @include(if: $refetchFlag)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RefetchContainerWithSameArgumentNamesRefetchQuery",
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
                "variableName": "refetchFlag",
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
    "name": "RefetchContainerWithSameArgumentNamesRefetchQuery",
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
            "condition": "refetchFlag",
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
(node/*: any*/).hash = 'b53775b17b6792a5bca9af13eb579cc6';
module.exports = node;
