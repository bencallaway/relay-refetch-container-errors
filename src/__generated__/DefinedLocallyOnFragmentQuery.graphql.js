/**
 * @flow
 * @relayHash df919a6e84b184e85ec443d3ba6791e2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DefinedLocallyOnFragment_viewer$ref = any;
export type DefinedLocallyOnFragmentQueryVariables = {|
  parentFlag: boolean
|};
export type DefinedLocallyOnFragmentQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: DefinedLocallyOnFragment_viewer$ref
  |}
|};
export type DefinedLocallyOnFragmentQuery = {|
  variables: DefinedLocallyOnFragmentQueryVariables,
  response: DefinedLocallyOnFragmentQueryResponse,
|};
*/


/*
query DefinedLocallyOnFragmentQuery(
  $parentFlag: Boolean!
) {
  viewer {
    ...DefinedLocallyOnFragment_viewer_bZ8OP
    id
  }
}

fragment DefinedLocallyOnFragment_viewer_bZ8OP on Viewer {
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
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DefinedLocallyOnFragmentQuery",
  "id": null,
  "text": "query DefinedLocallyOnFragmentQuery(\n  $parentFlag: Boolean!\n) {\n  viewer {\n    ...DefinedLocallyOnFragment_viewer_bZ8OP\n    id\n  }\n}\n\nfragment DefinedLocallyOnFragment_viewer_bZ8OP on Viewer {\n  foo\n  bar @include(if: $parentFlag)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DefinedLocallyOnFragmentQuery",
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
            "name": "DefinedLocallyOnFragment_viewer",
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
    "name": "DefinedLocallyOnFragmentQuery",
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
(node/*: any*/).hash = 'cc7d54a1a27bc5bafe0a0e40ee8c0159';
module.exports = node;
