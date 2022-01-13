/**
 * @generated SignedSource<<bc1f385f1b98f114d21bedf860295d89>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
export type RepositoriesPaginationQuery$variables = {
  count?: number | null;
  cursor?: string | null;
  states?: ReadonlyArray<IssueState> | null;
  id: string;
};
export type RepositoriesPaginationQueryVariables = RepositoriesPaginationQuery$variables;
export type RepositoriesPaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"Repositories_repositories">;
  } | null;
};
export type RepositoriesPaginationQueryResponse = RepositoriesPaginationQuery$data;
export type RepositoriesPaginationQuery = {
  variables: RepositoriesPaginationQueryVariables;
  response: RepositoriesPaginationQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": 10,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": "",
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": [
    "OPEN"
  ],
  "kind": "LocalArgument",
  "name": "states"
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
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
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
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
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v10 = [
  (v9/*: any*/)
];
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
    "name": "RepositoriesPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
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
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "RepositoriesPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v8/*: any*/),
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
                            "selections": (v10/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "StargazerConnection",
                            "kind": "LinkedField",
                            "name": "stargazers",
                            "plural": false,
                            "selections": (v10/*: any*/),
                            "storageKey": null
                          },
                          (v7/*: any*/),
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
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v8/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "Repositories_repositories_repositories",
                "kind": "LinkedHandle",
                "name": "repositories"
              }
            ],
            "type": "RepositoryOwner",
            "abstractKey": "__isRepositoryOwner"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8f930e2213de89b2d160f2ac4ac2fd27",
    "id": null,
    "metadata": {},
    "name": "RepositoriesPaginationQuery",
    "operationKind": "query",
    "text": "query RepositoriesPaginationQuery(\n  $count: Int = 10\n  $cursor: String = \"\"\n  $states: [IssueState!] = [OPEN]\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Repositories_repositories_a4QoT\n    id\n  }\n}\n\nfragment Repositories_repositories_a4QoT on RepositoryOwner {\n  __isRepositoryOwner: __typename\n  repositories(first: $count, after: $cursor) {\n    edges {\n      cursor\n      node {\n        name\n        issues(states: $states) {\n          totalCount\n        }\n        stargazers {\n          totalCount\n        }\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    totalCount\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "7539dca925e5dfb3ce6141baad3e5f7f";

export default node;
