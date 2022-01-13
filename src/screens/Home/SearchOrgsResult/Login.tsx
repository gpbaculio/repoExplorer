import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {graphql, useFragment} from 'react-relay';

import {DynamicPressable, DynamicText} from '../../../components';
import {AppStackParamList} from '../../../navigation/Navigation';
import {Login_repositoryOwner$key} from '../../../__generated__/Login_repositoryOwner.graphql';

const LoginFragmentGraphQL = graphql`
  fragment Login_repositoryOwner on RepositoryOwner {
    login
    id
  }
`;

interface LoginProps {
  repositoryOwner: Login_repositoryOwner$key | null;
  fetchKey: number;
}

const Login = ({repositoryOwner, fetchKey}: LoginProps) => {
  const result = useFragment(LoginFragmentGraphQL, repositoryOwner);

  const {navigate} = useNavigation<StackNavigationProp<AppStackParamList>>();

  const onLoginPress = useCallback(() => {
    if (result && result.login) {
      navigate('Result', {login: result.login, fetchKey});
    }
  }, [result, navigate, fetchKey]);

  return (
    <DynamicPressable
      marginTop={8}
      width="100%"
      borderRadius={4}
      backgroundColor="#161B22"
      paddingHorizontal={12}
      paddingVertical={8}
      justifyContent="center"
      borderWidth={1}
      borderColor="#30363d"
      onPress={onLoginPress}>
      <DynamicText fontWeight="bold" color="#fff" fontSize={18}>
        {result?.login || 'Not found'}
      </DynamicText>
    </DynamicPressable>
  );
};

export default Login;
