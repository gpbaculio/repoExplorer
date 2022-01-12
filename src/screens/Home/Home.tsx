import React, {Suspense, useState} from 'react';
import {Pressable} from 'react-native';

import {
  DynamicPressable,
  DynamicText,
  DynamicView,
  ErrorBoundaryWithRetry,
} from '../../components';
import {useDebounce} from '../../hooks';
import {SearchOrgsInput, SearchOrgsResult} from './components';

const Home = () => {
  const [text, onChangeText] = useState('');
  const debouncedText = useDebounce(text, 3000);
  return (
    <DynamicView padding={16} flex={1} backgroundColor="#0D1117">
      <SearchOrgsInput text={text} onChangeText={onChangeText} />
      {/* search when trimmed debouncedText is valid */}
      {!!debouncedText && (
        <Suspense
          fallback={
            <DynamicView
              marginTop={8}
              width="100%"
              borderRadius={4}
              backgroundColor="#161B22"
              paddingHorizontal={12}
              paddingVertical={8}
              justifyContent="center">
              <DynamicText color="#868f99">Loading...</DynamicText>
            </DynamicView>
          }>
          <ErrorBoundaryWithRetry
            fallback={({error, retry}) => (
              <DynamicView flex={1} justifyContent="center" alignItems="center">
                <DynamicText color="red">{error}</DynamicText>
                {/* Render a button to retry; this will attempt to re-render the
            content inside the boundary, i.e. the query component */}
                <DynamicPressable
                  backgroundColor="#007BFF"
                  paddingHorizontal={12}
                  paddingVertical={8}
                  onPress={retry}>
                  <DynamicText color="#ffffff">{error}</DynamicText>
                </DynamicPressable>
              </DynamicView>
            )}>
            {({fetchKey}) => {
              // If we have retried, use the new `retryQueryRef` provided
              // by the Error Boundary
              return (
                <SearchOrgsResult login={debouncedText} fetchKey={fetchKey} />
              );
            }}
          </ErrorBoundaryWithRetry>
        </Suspense>
      )}
    </DynamicView>
  );
};

export default Home;
