/**
 * @generated SignedSource<<9ac56a97cf1af210d3453448584070bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SearchOrgsResultQuery$variables = {
  login: string;
};
export type SearchOrgsResultQueryVariables = SearchOrgsResultQuery$variables;
export type SearchOrgsResultQuery$data = {
  readonly repositoryOwner: {
    readonly login: string;
    readonly id: string;
  } | null;
};
export type SearchOrgsResultQueryResponse = SearchOrgsResultQuery$data;
export type SearchOrgsResultQuery = {
  variables: SearchOrgsResultQueryVariables;
  response: SearchOrgsResultQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchOrgsResultQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "repositoryOwner",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchOrgsResultQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "repositoryOwner",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "beb5ace02a37fce64d4cd211d76a3b64",
    "id": null,
    "metadata": {},
    "name": "SearchOrgsResultQuery",
    "operationKind": "query",
    "text": "query SearchOrgsResultQuery(\n  $login: String!\n) {\n  repositoryOwner(login: $login) {\n    __typename\n    login\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "88a49b3ac3d4fb3971377e364515d443";

export default node;
