/**
 * @generated SignedSource<<fb54c48e7c2d5744c15aac3f590404d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchOrgsResultQuery$variables = {
  login: string;
};
export type SearchOrgsResultQueryVariables = SearchOrgsResultQuery$variables;
export type SearchOrgsResultQuery$data = {
  readonly repositoryOwner: {
    readonly " $fragmentSpreads": FragmentRefs<"Login_repositoryOwner">;
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
];
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Login_repositoryOwner"
          }
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
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isRepositoryOwner"
          },
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8839ac77281a263b4e9484b7d5c609bb",
    "id": null,
    "metadata": {},
    "name": "SearchOrgsResultQuery",
    "operationKind": "query",
    "text": "query SearchOrgsResultQuery(\n  $login: String!\n) {\n  repositoryOwner(login: $login) {\n    __typename\n    ...Login_repositoryOwner\n    id\n  }\n}\n\nfragment Login_repositoryOwner on RepositoryOwner {\n  __isRepositoryOwner: __typename\n  login\n  id\n}\n"
  }
};
})();

(node as any).hash = "ce36901e992e0c3ba1a199cfadd98f76";

export default node;
