/**
 * @flow
 * @relayHash 2c4ee74ceb0f4f695e6906890037dc63
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DefinedLocallyOnFragment_viewer$ref = any;
export type DefinedLocallyOnFragmentRefetchQueryVariables = {|
  parentFlag: boolean
|};
export type DefinedLocallyOnFragmentRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: DefinedLocallyOnFragment_viewer$ref
  |}
|};
export type DefinedLocallyOnFragmentRefetchQuery = {|
  variables: DefinedLocallyOnFragmentRefetchQueryVariables,
  response: DefinedLocallyOnFragmentRefetchQueryResponse,
|};
*/


/*
query DefinedLocallyOnFragmentRefetchQuery(
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
  "name": "DefinedLocallyOnFragmentRefetchQuery",
  "id": null,
  "text": "query DefinedLocallyOnFragmentRefetchQuery(\n  $parentFlag: Boolean!\n) {\n  viewer {\n    ...DefinedLocallyOnFragment_viewer_bZ8OP\n    id\n  }\n}\n\nfragment DefinedLocallyOnFragment_viewer_bZ8OP on Viewer {\n  foo\n  bar @include(if: $parentFlag)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DefinedLocallyOnFragmentRefetchQuery",
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
    "name": "DefinedLocallyOnFragmentRefetchQuery",
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
(node/*: any*/).hash = '1475d543a1d51d515740464b01de664c';
module.exports = node;
