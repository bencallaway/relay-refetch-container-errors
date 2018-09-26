/**
 * @flow
 * @relayHash a96849904a5b5e6ca6f498b50bfddebf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DefinedGloballyOnQuery_viewer$ref = any;
export type DefinedGloballyOnQueryQueryVariables = {|
  parentFlag: boolean,
  childFlag: boolean,
|};
export type DefinedGloballyOnQueryQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: DefinedGloballyOnQuery_viewer$ref
  |}
|};
export type DefinedGloballyOnQueryQuery = {|
  variables: DefinedGloballyOnQueryQueryVariables,
  response: DefinedGloballyOnQueryQueryResponse,
|};
*/


/*
query DefinedGloballyOnQueryQuery(
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
  "name": "DefinedGloballyOnQueryQuery",
  "id": null,
  "text": "query DefinedGloballyOnQueryQuery(\n  $parentFlag: Boolean!\n) {\n  viewer {\n    ...DefinedGloballyOnQuery_viewer_bZ8OP\n    id\n  }\n}\n\nfragment DefinedGloballyOnQuery_viewer_bZ8OP on Viewer {\n  foo\n  bar @include(if: $parentFlag)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DefinedGloballyOnQueryQuery",
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
    "name": "DefinedGloballyOnQueryQuery",
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
(node/*: any*/).hash = '052c1672790449a4f3d4e6ce40b3ca26';
module.exports = node;
