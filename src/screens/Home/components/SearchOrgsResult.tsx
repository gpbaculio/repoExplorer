import React from 'react';
import {graphql, useLazyLoadQuery} from 'react-relay';

import {DynamicText, DynamicView} from '../../../components';

import {SearchOrgsResultQuery} from '../../../__generated__/SearchOrgsResultQuery.graphql';

interface ResultProps {
  login: string;
  fetchKey: number;
}

const SearchOrgsResultQueryGraphQL = graphql`
  query SearchOrgsResultQuery($login: String!) {
    repositoryOwner(login: $login) {
      login
      id
    }
  }
`;

const Result = ({login, fetchKey}: ResultProps) => {
  const {repositoryOwner} = useLazyLoadQuery<SearchOrgsResultQuery>(
    SearchOrgsResultQueryGraphQL,
    {login},
    {fetchKey},
  );
  return (
    <DynamicView
      marginTop={8}
      width="100%"
      borderRadius={4}
      backgroundColor="#161B22"
      paddingHorizontal={12}
      paddingVertical={8}
      justifyContent="center"
      borderWidth={1}
      borderColor="#30363d">
      <DynamicText fontWeight="bold" color="#fff" fontSize={18}>
        {repositoryOwner?.login || 'Not found'}
      </DynamicText>
    </DynamicView>
  );
};

export default Result;
