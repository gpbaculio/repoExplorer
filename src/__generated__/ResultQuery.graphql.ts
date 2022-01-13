/**
 * @generated SignedSource<<ff7189f4321c3e6814b21f8c83b1577f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
export type ResultQuery$variables = {
  login: string;
  count?: number | null;
  cursor?: string | null;
  states?: ReadonlyArray<IssueState> | null;
};
export type ResultQueryVariables = ResultQuery$variables;
export type ResultQuery$data = {
  readonly repositoryOwner: {
    readonly " $fragmentSpreads": FragmentRefs<"Repositories_repositories">;
  } | null;
};
export type ResultQueryResponse = ResultQuery$data;
export type ResultQuery = {
  variables: ResultQueryVariables;
  response: ResultQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "login"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "states"
},
v4 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v5 = {
  "kind": "Variable",
  "name": "states",
  "variableName": "states"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v9 = [
  (v8/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ResultQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "repositoryOwner",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              (v5/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "Repositories_repositories"
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
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "ResultQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "repositoryOwner",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isRepositoryOwner"
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          (v5/*: any*/)
                        ],
                        "concreteType": "IssueConnection",
                        "kind": "LinkedField",
                        "name": "issues",
                        "plural": false,
                        "selections": (v9/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "StargazerConnection",
                        "kind": "LinkedField",
                        "name": "stargazers",
                        "plural": false,
                        "selections": (v9/*: any*/),
                        "storageKey": null
                      },
                      (v10/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasPreviousPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "Repositories_repositories_repositories",
            "kind": "LinkedHandle",
            "name": "repositories"
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "caf223e286fe91702aeb68597388a350",
    "id": null,
    "metadata": {},
    "name": "ResultQuery",
    "operationKind": "query",
    "text": "query ResultQuery(\n  $login: String!\n  $count: Int\n  $cursor: String\n  $states: [IssueState!]\n) {\n  repositoryOwner(login: $login) {\n    __typename\n    ...Repositories_repositories_a4QoT\n    id\n  }\n}\n\nfragment Repositories_repositories_a4QoT on RepositoryOwner {\n  __isRepositoryOwner: __typename\n  repositories(first: $count, after: $cursor) {\n    edges {\n      cursor\n      node {\n        name\n        issues(states: $states) {\n          totalCount\n        }\n        stargazers {\n          totalCount\n        }\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    totalCount\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "12f8fa6a7905efd084d7824369d69de2";

export default node;
