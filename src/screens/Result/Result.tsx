import React, {Suspense} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
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
  const {repositoryOwner} = useLazyLoadQuery<ResultQuery>(
    ResultQueryGraphQL,
    {login: params.login, count: 10},
    {fetchKey: params.fetchKey},
  );
  return (
    <DynamicView flex={1} backgroundColor="#0D1117">
      <Repositories repositoryOwner={repositoryOwner} />
    </DynamicView>
  );
};

export default () => (
  <Suspense
    fallback={
      <DynamicView
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor="#0D1117">
        <ActivityIndicator size="large" color="#868f99" />
      </DynamicView>
    }>
    <Result />
  </Suspense>
);
