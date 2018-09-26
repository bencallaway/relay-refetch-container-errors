/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DefinedLocallyOnFragment_viewer$ref: FragmentReference;
export type DefinedLocallyOnFragment_viewer = {|
  +foo: ?string,
  +bar?: ?string,
  +$refType: DefinedLocallyOnFragment_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "DefinedLocallyOnFragment_viewer",
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
(node/*: any*/).hash = 'cb4e819c9650699193d574693ca49a1b';
module.exports = node;
