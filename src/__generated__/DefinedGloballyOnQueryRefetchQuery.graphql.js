/**
 * @flow
 * @relayHash acf13f3abd763820b6dae2ae3ffabc74
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DefinedGloballyOnQuery_viewer$ref = any;
export type DefinedGloballyOnQueryRefetchQueryVariables = {|
  parentFlag: boolean,
  childFlag: boolean,
|};
export type DefinedGloballyOnQueryRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: DefinedGloballyOnQuery_viewer$ref
  |}
|};
export type DefinedGloballyOnQueryRefetchQuery = {|
  variables: DefinedGloballyOnQueryRefetchQueryVariables,
  response: DefinedGloballyOnQueryRefetchQueryResponse,
|};
*/


/*
query DefinedGloballyOnQueryRefetchQuery(
  $parentFlag: Boolean!
) {
  viewer {
    ...DefinedGloballyOnQuery_viewer_bZ8OP
    id
  }
}

fragment DefinedGloballyOnQuery_viewer_bZ8OP on Viewer {
  foo
  bar @include(if: $parentFlag)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "parentFlag",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "childFlag",
    "type": "Boolean!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DefinedGloballyOnQueryRefetchQuery",
  "id": null,
  "text": "query DefinedGloballyOnQueryRefetchQuery(\n  $parentFlag: Boolean!\n) {\n  viewer {\n    ...DefinedGloballyOnQuery_viewer_bZ8OP\n    id\n  }\n}\n\nfragment DefinedGloballyOnQuery_viewer_bZ8OP on Viewer {\n  foo\n  bar @include(if: $parentFlag)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DefinedGloballyOnQueryRefetchQuery",
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
            "name": "DefinedGloballyOnQuery_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "childFlag",
                "variableName": "parentFlag",
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
    "name": "DefinedGloballyOnQueryRefetchQuery",
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
            "condition": "parentFlag",
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
(node/*: any*/).hash = 'd1a13bcff649b5c2b48b1a91e64bbb0f';
module.exports = node;
