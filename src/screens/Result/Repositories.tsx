import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {graphql, usePaginationFragment} from 'react-relay';

import {DynamicPressable, DynamicText, DynamicView} from '../../components';
import {RepositoriesPaginationQuery} from '../../__generated__/RepositoriesPaginationQuery.graphql';
import {Repositories_repositories$key} from '../../__generated__/Repositories_repositories.graphql';

const RepositoriesFragmentGraphQL = graphql`
  fragment Repositories_repositories on RepositoryOwner
  @argumentDefinitions(
    count: {type: "Int", defaultValue: 10}
    cursor: {type: "String", defaultValue: ""}
    states: {type: "[IssueState!]", defaultValue: [OPEN]}
  )
  @refetchable(queryName: "RepositoriesPaginationQuery") {
    repositories(first: $count, after: $cursor)
      @connection(key: "Repositories_repositories_repositories") {
      edges {
        cursor
        node {
          name
          issues(states: $states) {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`;

interface RepositoriesProps {
  repositoryOwner: Repositories_repositories$key | null;
}

const Repositories = ({repositoryOwner}: RepositoriesProps) => {
  const {data, loadNext, hasNext, isLoadingNext} = usePaginationFragment<
    RepositoriesPaginationQuery,
    Repositories_repositories$key
  >(RepositoriesFragmentGraphQL, repositoryOwner);

  return (
    <FlatList
      ListHeaderComponent={() => (
        <DynamicView marginBottom={16} alignItems="center">
          <DynamicText color={'#fff'}>
            Showing {data?.repositories.edges?.length} of&nbsp;
            {data?.repositories.totalCount} repositories
          </DynamicText>
        </DynamicView>
      )}
      data={data?.repositories.edges}
      contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}
      renderItem={({item}) => (
        <DynamicView
          backgroundColor={'#161B22'}
          marginBottom={8}
          borderColor={'#30363d'}
          borderWidth={1}
          borderRadius={4}
          flexDirection="row"
          alignItems="center"
          key={item?.node?.name}
          paddingVertical={8}
          paddingHorizontal={12}>
          <DynamicText flex={0.65} fontWeight="bold" color={'#fff'}>
            {item?.node?.name}
          </DynamicText>
          <DynamicView flex={0.35}>
            <DynamicView
              flex={1}
              justifyContent="space-between"
              flexDirection="row">
              <DynamicView flex={0.5}>
                <DynamicText marginLeft={'auto'} fontSize={12} color={'#fff'}>
                  stars:
                </DynamicText>
              </DynamicView>
              <DynamicView flex={0.5}>
                <DynamicText marginLeft={'auto'} fontSize={12} color={'#fff'}>
                  {item?.node?.stargazers
                    ? item?.node?.stargazers.totalCount
                    : 0}
                </DynamicText>
              </DynamicView>
            </DynamicView>
            <DynamicView
              flex={1}
              justifyContent="space-between"
              flexDirection="row">
              <DynamicView flex={0.5}>
                <DynamicText marginLeft={'auto'} fontSize={12} color={'#fff'}>
                  issues:
                </DynamicText>
              </DynamicView>
              <DynamicView flex={0.5}>
                <DynamicText marginLeft={'auto'} fontSize={12} color={'#fff'}>
                  {item?.node?.issues ? item?.node?.issues.totalCount : 0}
                </DynamicText>
              </DynamicView>
            </DynamicView>
          </DynamicView>
        </DynamicView>
      )}
      keyExtractor={(item, index) => `repo:${index}:${item?.cursor}`}
      ListFooterComponent={() => {
        if (isLoadingNext) {
          return <ActivityIndicator size="large" color="#868f99" />;
        }
        if (hasNext) {
          return (
            <DynamicPressable
              backgroundColor="#007BFF"
              paddingHorizontal={12}
              paddingVertical={8}
              borderRadius={4}
              alignItems="center"
              marginVertical={8}
              disabled={isLoadingNext}
              onPress={() => loadNext(10)}>
              <DynamicText fontSize={16} fontWeight="bold" color={'#fff'}>
                LOAD MORE
              </DynamicText>
            </DynamicPressable>
          );
        }
        return null;
      }}
    />
  );
};

export default Repositories;
