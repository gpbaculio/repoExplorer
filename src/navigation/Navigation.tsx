import React, {Suspense} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Result} from '../screens';

const AppStack = createStackNavigator();
const HomeComponent = () => (
  <Suspense fallback={null}>
    <Home />
  </Suspense>
);

const Navigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#161B22',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}
        name="Home"
        component={HomeComponent}
      />
      <AppStack.Screen name="Result" component={Result} />
    </AppStack.Navigator>
  );
};

export default Navigation;
