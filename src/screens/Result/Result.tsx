import React, {Suspense} from 'react';
import {View, Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {graphql, useLazyLoadQuery} from 'react-relay';

import {AppStackParamList} from '../../navigation/Navigation';

import {ResultQuery} from '../../__generated__/ResultQuery.graphql';
import Repositories from './Repositories';
import {DynamicText, DynamicView} from '../../components';

const ResultQueryGraphQL = graphql`
  query ResultQuery($login: String!, $count: Int, $cursor: String) {
    repositoryOwner(login: $login) {
      ...Repositories_repositories @arguments(count: $count, cursor: $cursor)
    }
  }
`;

const Result = () => {
  const {params} = useRoute<RouteProp<AppStackParamList, 'Result'>>();
  console.log('login params: ', params);
  const {repositoryOwner} = useLazyLoadQuery<ResultQuery>(
    ResultQueryGraphQL,
    {login: params.login, count: 10},
    {fetchKey: params.fetchKey},
  );
  return (
    <View>
      <Text>Result</Text>
      <Repositories repositoryOwner={repositoryOwner} />
    </View>
  );
};

export default () => (
  <Suspense
    fallback={
      <DynamicView flex={1} alignItems="center" justifyContent="center">
        <DynamicText color={'red'}>Loading...</DynamicText>
      </DynamicView>
    }>
    <Result />
  </Suspense>
);
