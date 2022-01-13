import React, {Suspense, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {DynamicView, ErrorBoundaryWithRetry, ErrorUI} from '../../components';
import {useDebounce} from '../../hooks';
import SearchOrgsInput from './SearchOrgsInput';
import SearchOrgsResult from './SearchOrgsResult';

const Home = () => {
  const [text, onChangeText] = useState('');
  const debouncedText = useDebounce(text, 3000);
  return (
    <DynamicView padding={16} flex={1} backgroundColor="#0D1117">
      <SearchOrgsInput text={text} onChangeText={onChangeText} />
      {/* search when trimmed debouncedText is valid */}
      {!!debouncedText && (
        <ErrorBoundaryWithRetry
          fallback={({error, retry}) => (
            <ErrorUI error={error} retry={retry} />
          )}>
          {({fetchKey}) => {
            // If we have retried, use the new `retryQueryRef` provided
            // by the Error Boundary
            return (
              <Suspense
                fallback={
                  <DynamicView
                    marginTop={8}
                    width="100%"
                    borderRadius={4}
                    backgroundColor="#161B22"
                    paddingHorizontal={12}
                    paddingVertical={8}
                    justifyContent="center"
                    alignItems="center">
                    <ActivityIndicator size="small" color="#868f99" />
                  </DynamicView>
                }>
                <SearchOrgsResult login={debouncedText} fetchKey={fetchKey} />
              </Suspense>
            );
          }}
        </ErrorBoundaryWithRetry>
      )}
    </DynamicView>
  );
};

export default Home;
