import React from 'react';

import DynamicView from './DynamicView';
import DynamicText from './DynamicText';
import DynamicPressable from './DynamicPressable';

interface ErrorUIProps {
  error: string;
  retry: () => void;
}

const ErrorUI = ({error, retry}: ErrorUIProps) => (
  <DynamicView
    flex={1}
    backgroundColor={'#0D1117'}
    justifyContent="center"
    alignItems="center">
    <DynamicText color="red">{error}</DynamicText>
    <DynamicPressable
      backgroundColor="#007BFF"
      paddingHorizontal={12}
      paddingVertical={8}
      marginTop={16}
      onPress={retry}>
      <DynamicText color="#ffffff">Retry</DynamicText>
    </DynamicPressable>
  </DynamicView>
);

export default ErrorUI;
