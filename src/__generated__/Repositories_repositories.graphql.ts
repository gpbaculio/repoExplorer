/**
 * @generated SignedSource<<a47d210db0d891bfa1cc744c3cfa5180>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Repositories_repositories$data = {
  readonly repositories: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly name: string;
        readonly issues: {
          readonly totalCount: number;
        };
        readonly stargazers: {
          readonly totalCount: number;
        };
      } | null;
    } | null> | null;
    readonly pageInfo: {
      readonly startCursor: string | null;
      readonly endCursor: string | null;
      readonly hasNextPage: boolean;
      readonly hasPreviousPage: boolean;
    };
    readonly totalCount: number;
  };
  readonly id: string;
  readonly " $fragmentType": "Repositories_repositories";
};
export type Repositories_repositories = Repositories_repositories$data;
export type Repositories_repositories$key = {
  readonly " $data"?: Repositories_repositories$data;
  readonly " $fragmentSpreads": FragmentRefs<"Repositories_repositories">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "repositories"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [
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
      "defaultValue": [
        "OPEN"
      ],
      "kind": "LocalArgument",
      "name": "states"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./RepositoriesPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "Repositories_repositories",
  "selections": [
    {
      "alias": "repositories",
      "args": null,
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "__Repositories_repositories_repositories_connection",
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
                    {
                      "kind": "Variable",
                      "name": "states",
                      "variableName": "states"
                    }
                  ],
                  "concreteType": "IssueConnection",
                  "kind": "LinkedField",
                  "name": "issues",
                  "plural": false,
                  "selections": (v2/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "StargazerConnection",
                  "kind": "LinkedField",
                  "name": "stargazers",
                  "plural": false,
                  "selections": (v2/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
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
        (v1/*: any*/)
      ],
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
})();

(node as any).hash = "7539dca925e5dfb3ce6141baad3e5f7f";

export default node;
