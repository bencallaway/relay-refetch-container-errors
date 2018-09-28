/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RefetchContainerWithDifferentArgumentNames_viewer$ref: FragmentReference;
export type RefetchContainerWithDifferentArgumentNames_viewer = {|
  +foo: ?string,
  +bar?: ?string,
  +$refType: RefetchContainerWithDifferentArgumentNames_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "RefetchContainerWithDifferentArgumentNames_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "refetchFlag",
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
};
// prettier-ignore
(node/*: any*/).hash = '818773894fc2569c96e8ae7006ecf756';
module.exports = node;
