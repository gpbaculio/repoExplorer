import React from 'react';
import {View, Text} from 'react-native';
import {graphql, usePaginationFragment} from 'react-relay';
import {DynamicPressable, DynamicText, DynamicView} from '../../components';
import {Repositories_repositories$key} from '../../__generated__/Repositories_repositories.graphql';

const RepositoriesFragmentGraphQL = graphql`
  fragment Repositories_repositories on RepositoryOwner
  @argumentDefinitions(
    count: {type: "Int", defaultValue: 10}
    cursor: {type: "String", defaultValue: ""}
  )
  @refetchable(queryName: "RepositoriesPaginationQuery") {
    repositories(first: $count, after: $cursor)
      @connection(key: "Repositories_repositories_repositories") {
      edges {
        node {
          nameWithOwner
          issues(states: OPEN) {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

interface RepositoriesProps {
  repositoryOwner: Repositories_repositories$key | null;
}

const Repositories = ({repositoryOwner}: RepositoriesProps) => {
  const {data, loadNext, refetch, hasNext, isLoadingNext} =
    usePaginationFragment(RepositoriesFragmentGraphQL, repositoryOwner);
  return (
    <View>
      {data?.repositories.edges?.map(edge => {
        return (
          <Text key={edge?.node?.nameWithOwner}>
            {edge?.node?.nameWithOwner}
          </Text>
        );
      })}
      {hasNext && (
        <DynamicPressable backgroundColor={'red'} onPress={() => loadNext(10)}>
          <DynamicText color={'#fff'}>Load More</DynamicText>
        </DynamicPressable>
      )}
      {isLoadingNext && (
        <DynamicView backgroundColor={'green'}>
          <DynamicText color={'#fff'}>Loading...</DynamicText>
        </DynamicView>
      )}
    </View>
  );
};

export default Repositories;
