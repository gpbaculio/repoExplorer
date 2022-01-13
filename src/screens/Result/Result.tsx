import React, {Suspense, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {graphql, useLazyLoadQuery} from 'react-relay';

import {AppStackParamList} from '../../navigation/Navigation';
import Repositories from './Repositories';
import {
  DynamicPressable,
  DynamicText,
  DynamicView,
  ErrorBoundaryWithRetry,
  ErrorUI,
} from '../../components';

import {ResultQuery} from '../../__generated__/ResultQuery.graphql';
import {IssueState} from '../../__generated__/RepositoriesPaginationQuery.graphql';
import IssuesFilters from './IssuesFilters';

const ResultQueryGraphQL = graphql`
  query ResultQuery(
    $login: String!
    $count: Int
    $cursor: String
    $states: [IssueState!]
  ) {
    repositoryOwner(login: $login) {
      ...Repositories_repositories
        @arguments(count: $count, cursor: $cursor, states: $states)
    }
  }
`;

interface ResultProps {
  fetchKey: number;
  states: IssueState[];
  setHasFinishedSuspending: React.Dispatch<React.SetStateAction<boolean>>;
}

const Result = ({fetchKey, states, setHasFinishedSuspending}: ResultProps) => {
  const {params} = useRoute<RouteProp<AppStackParamList, 'Result'>>();
  const {repositoryOwner} = useLazyLoadQuery<ResultQuery>(
    ResultQueryGraphQL,
    {login: params.login, count: 10, states},
    {fetchKey},
  );
  useEffect(() => {
    setHasFinishedSuspending(true);
  }, []);
  return (
    <DynamicView flex={1} backgroundColor="#0D1117">
      <Repositories repositoryOwner={repositoryOwner} />
    </DynamicView>
  );
};

export default () => {
  const [states, setStates] = useState<IssueState[]>(['OPEN', 'CLOSED']);
  const [hasFinishedSuspending, setHasFinishedSuspending] = useState(false);
  return (
    <ErrorBoundaryWithRetry
      fallback={({error, retry}) => <ErrorUI error={error} retry={retry} />}>
      {({fetchKey}) => (
        <DynamicView flex={1} backgroundColor={'#0D1117'}>
          {hasFinishedSuspending && (
            <IssuesFilters
              states={states}
              setStates={setStates}
              hasFinishedSuspending={hasFinishedSuspending}
            />
          )}
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
            <Result
              fetchKey={fetchKey}
              states={states}
              setHasFinishedSuspending={setHasFinishedSuspending}
            />
          </Suspense>
        </DynamicView>
      )}
    </ErrorBoundaryWithRetry>
  );
};
