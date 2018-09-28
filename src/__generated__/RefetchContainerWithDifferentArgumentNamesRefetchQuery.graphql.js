/**
 * @flow
 * @relayHash 08e8cd830ff1b1e49e970fe49938145e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RefetchContainerWithDifferentArgumentNames_viewer$ref = any;
export type RefetchContainerWithDifferentArgumentNamesRefetchQueryVariables = {|
  refetchQueryFlag: boolean
|};
export type RefetchContainerWithDifferentArgumentNamesRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: RefetchContainerWithDifferentArgumentNames_viewer$ref
  |}
|};
export type RefetchContainerWithDifferentArgumentNamesRefetchQuery = {|
  variables: RefetchContainerWithDifferentArgumentNamesRefetchQueryVariables,
  response: RefetchContainerWithDifferentArgumentNamesRefetchQueryResponse,
|};
*/


/*
query RefetchContainerWithDifferentArgumentNamesRefetchQuery(
  $refetchQueryFlag: Boolean!
) {
  viewer {
    ...RefetchContainerWithDifferentArgumentNames_viewer_4xghln
    id
  }
}

fragment RefetchContainerWithDifferentArgumentNames_viewer_4xghln on Viewer {
  foo
  bar @include(if: $refetchQueryFlag)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "refetchQueryFlag",
    "type": "Boolean!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RefetchContainerWithDifferentArgumentNamesRefetchQuery",
  "id": null,
  "text": "query RefetchContainerWithDifferentArgumentNamesRefetchQuery(\n  $refetchQueryFlag: Boolean!\n) {\n  viewer {\n    ...RefetchContainerWithDifferentArgumentNames_viewer_4xghln\n    id\n  }\n}\n\nfragment RefetchContainerWithDifferentArgumentNames_viewer_4xghln on Viewer {\n  foo\n  bar @include(if: $refetchQueryFlag)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RefetchContainerWithDifferentArgumentNamesRefetchQuery",
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
                "variableName": "refetchQueryFlag",
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
    "name": "RefetchContainerWithDifferentArgumentNamesRefetchQuery",
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
            "condition": "refetchQueryFlag",
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
(node/*: any*/).hash = '80a89a8fcafb157d37149addc2787222';
module.exports = node;
