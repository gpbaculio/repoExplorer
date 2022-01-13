/**
 * @generated SignedSource<<9f4f23aa75efa002e249e68ede36557d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest, Query} from 'relay-runtime';
import {FragmentRefs} from 'relay-runtime';
export type ResultQuery$variables = {
  login: string;
  count?: number | null;
  cursor?: string | null;
};
export type ResultQueryVariables = ResultQuery$variables;
export type ResultQuery$data = {
  readonly repositoryOwner: {
    readonly ' $fragmentSpreads': FragmentRefs<'Repositories_repositories'>;
  } | null;
};
export type ResultQueryResponse = ResultQuery$data;
export type ResultQuery = {
  variables: ResultQueryVariables;
  response: ResultQuery$data;
};

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'count',
    },
    v1 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'cursor',
    },
    v2 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'login',
    },
    v3 = [
      {
        kind: 'Variable',
        name: 'login',
        variableName: 'login',
      },
    ],
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
      storageKey: null,
    },
    v5 = [
      {
        kind: 'Variable',
        name: 'after',
        variableName: 'cursor',
      },
      {
        kind: 'Variable',
        name: 'first',
        variableName: 'count',
      },
    ],
    v6 = [
      {
        alias: null,
        args: null,
        kind: 'ScalarField',
        name: 'totalCount',
        storageKey: null,
      },
    ],
    v7 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/, v2 /*: any*/],
      kind: 'Fragment',
      metadata: null,
      name: 'ResultQuery',
      selections: [
        {
          alias: null,
          args: v3 /*: any*/,
          concreteType: null,
          kind: 'LinkedField',
          name: 'repositoryOwner',
          plural: false,
          selections: [
            {
              args: [
                {
                  kind: 'Variable',
                  name: 'count',
                  variableName: 'count',
                },
                {
                  kind: 'Variable',
                  name: 'cursor',
                  variableName: 'cursor',
                },
              ],
              kind: 'FragmentSpread',
              name: 'Repositories_repositories',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [v2 /*: any*/, v0 /*: any*/, v1 /*: any*/],
      kind: 'Operation',
      name: 'ResultQuery',
      selections: [
        {
          alias: null,
          args: v3 /*: any*/,
          concreteType: null,
          kind: 'LinkedField',
          name: 'repositoryOwner',
          plural: false,
          selections: [
            v4 /*: any*/,
            {
              kind: 'TypeDiscriminator',
              abstractKey: '__isRepositoryOwner',
            },
            {
              alias: null,
              args: v5 /*: any*/,
              concreteType: 'RepositoryConnection',
              kind: 'LinkedField',
              name: 'repositories',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'RepositoryEdge',
                  kind: 'LinkedField',
                  name: 'edges',
                  plural: true,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'Repository',
                      kind: 'LinkedField',
                      name: 'node',
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'name',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: 'Literal',
                              name: 'states',
                              value: 'OPEN',
                            },
                          ],
                          concreteType: 'IssueConnection',
                          kind: 'LinkedField',
                          name: 'issues',
                          plural: false,
                          selections: v6 /*: any*/,
                          storageKey: 'issues(states:"OPEN")',
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: 'StargazerConnection',
                          kind: 'LinkedField',
                          name: 'stargazers',
                          plural: false,
                          selections: v6 /*: any*/,
                          storageKey: null,
                        },
                        v7 /*: any*/,
                        v4 /*: any*/,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'cursor',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'PageInfo',
                  kind: 'LinkedField',
                  name: 'pageInfo',
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'endCursor',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'hasNextPage',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: v5 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'Repositories_repositories_repositories',
              kind: 'LinkedHandle',
              name: 'repositories',
            },
            v7 /*: any*/,
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '53822e8ee1a287a816a1f3fb33a09456',
      id: null,
      metadata: {},
      name: 'ResultQuery',
      operationKind: 'query',
      text: 'query ResultQuery(\n  $login: String!\n  $count: Int\n  $cursor: String\n) {\n  repositoryOwner(login: $login) {\n    __typename\n    ...Repositories_repositories_1G22uz\n    id\n  }\n}\n\nfragment Repositories_repositories_1G22uz on RepositoryOwner {\n  __isRepositoryOwner: __typename\n  repositories(first: $count, after: $cursor) {\n    edges {\n      node {\n        name\n        issues(states: OPEN) {\n          totalCount\n        }\n        stargazers {\n          totalCount\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n',
    },
  };
})();

(node as any).hash = '121c30c842bac7fe466b9fc3bcdb2c8b';

export default node;
