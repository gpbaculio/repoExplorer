import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
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
          name
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
  const {data, loadNext, hasNext, isLoadingNext} = usePaginationFragment(
    RepositoriesFragmentGraphQL,
    repositoryOwner,
  );
  return (
    <FlatList
      data={data?.repositories.edges}
      contentContainerStyle={{padding: 16}}
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
              <DynamicText fontSize={12} color={'#fff'}>
                stars:
              </DynamicText>
              <DynamicText fontSize={12} color={'#fff'}>
                {item?.node?.stargazers.totalCount}
              </DynamicText>
            </DynamicView>
            <DynamicView
              flex={1}
              justifyContent="space-between"
              flexDirection="row">
              <DynamicText fontSize={12} color={'#fff'}>
                open issues:
              </DynamicText>
              <DynamicText fontSize={12} color={'#fff'}>
                {item?.node?.issues.totalCount}
              </DynamicText>
            </DynamicView>
          </DynamicView>
        </DynamicView>
      )}
      keyExtractor={(item, index) => `repo:${index}:${item?.node?.name}`}
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
