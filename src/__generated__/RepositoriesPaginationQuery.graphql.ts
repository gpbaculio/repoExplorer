/**
 * @generated SignedSource<<29169a032e0089950d1ed8ed55b5e4ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoriesPaginationQuery$variables = {
  count?: number | null;
  cursor?: string | null;
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
var v0 = [
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
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
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoriesPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              }
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RepositoriesPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
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
                        "concreteType": "Repository",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "nameWithOwner",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "states",
                                "value": "OPEN"
                              }
                            ],
                            "concreteType": "IssueConnection",
                            "kind": "LinkedField",
                            "name": "issues",
                            "plural": false,
                            "selections": (v5/*: any*/),
                            "storageKey": "issues(states:\"OPEN\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "StargazerConnection",
                            "kind": "LinkedField",
                            "name": "stargazers",
                            "plural": false,
                            "selections": (v5/*: any*/),
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
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
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
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
    "cacheID": "46cff9467f785518942d91d719c6a015",
    "id": null,
    "metadata": {},
    "name": "RepositoriesPaginationQuery",
    "operationKind": "query",
    "text": "query RepositoriesPaginationQuery(\n  $count: Int = 10\n  $cursor: String = \"\"\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Repositories_repositories_1G22uz\n    id\n  }\n}\n\nfragment Repositories_repositories_1G22uz on RepositoryOwner {\n  __isRepositoryOwner: __typename\n  repositories(first: $count, after: $cursor) {\n    edges {\n      node {\n        nameWithOwner\n        issues(states: OPEN) {\n          totalCount\n        }\n        stargazers {\n          totalCount\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "607615719c7b2d90422a70c69f9cfd63";

export default node;
