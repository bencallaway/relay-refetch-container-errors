/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RefetchContainerWithSameArgumentNames_viewer$ref: FragmentReference;
export type RefetchContainerWithSameArgumentNames_viewer = {|
  +foo: ?string,
  +bar?: ?string,
  +$refType: RefetchContainerWithSameArgumentNames_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "RefetchContainerWithSameArgumentNames_viewer",
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
(node/*: any*/).hash = '833408ad6cfec5fa54b840ccf939de9b';
module.exports = node;
