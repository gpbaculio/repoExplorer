import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {graphql, useLazyLoadQuery} from 'react-relay';

import {DynamicPressable} from '../../../components';
import {AppStackParamList} from '../../../navigation/Navigation';

import {SearchOrgsResultQuery} from '../../../__generated__/SearchOrgsResultQuery.graphql';
import Login from './Login';

interface ResultProps {
  login: string;
  fetchKey: number;
}

const SearchOrgsResultQueryGraphQL = graphql`
  query SearchOrgsResultQuery($login: String!) {
    repositoryOwner(login: $login) {
      ...Login_repositoryOwner
    }
  }
`;

const Result = ({login, fetchKey}: ResultProps) => {
  const {repositoryOwner} = useLazyLoadQuery<SearchOrgsResultQuery>(
    SearchOrgsResultQueryGraphQL,
    {login},
    {fetchKey, fetchPolicy: 'network-only'},
  );

  return <Login repositoryOwner={repositoryOwner} fetchKey={fetchKey} />;
};

export default Result;
