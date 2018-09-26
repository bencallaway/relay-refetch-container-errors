/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DefinedGloballyOnQuery_viewer$ref: FragmentReference;
export type DefinedGloballyOnQuery_viewer = {|
  +foo: ?string,
  +bar?: ?string,
  +$refType: DefinedGloballyOnQuery_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "DefinedGloballyOnQuery_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "childFlag",
      "type": "Boolean!",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "foo",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "childFlag",
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
};
// prettier-ignore
(node/*: any*/).hash = '0bc44dd6faa5eb87945e48df56ac2734';
module.exports = node;
