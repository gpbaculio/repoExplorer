/**
 * @generated SignedSource<<559e2f3ba213b16fd235cbc5324e38cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Login_repositoryOwner$data = {
  readonly login: string;
  readonly id: string;
  readonly " $fragmentType": "Login_repositoryOwner";
};
export type Login_repositoryOwner = Login_repositoryOwner$data;
export type Login_repositoryOwner$key = {
  readonly " $data"?: Login_repositoryOwner$data;
  readonly " $fragmentSpreads": FragmentRefs<"Login_repositoryOwner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Login_repositoryOwner",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "RepositoryOwner",
  "abstractKey": "__isRepositoryOwner"
};

(node as any).hash = "f0740dda421d34592b7f2aa6ce16df7f";

export default node;
