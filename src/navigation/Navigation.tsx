import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Result} from '../screens';

export type AppStackParamList = {
  Home: undefined;
  Result: {
    login: string;
    fetchKey: number;
  };
};

const AppStack = createStackNavigator<AppStackParamList>();

const Navigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen
        options={({route}) => ({
          title: route.params.login,
          headerBackTitleStyle: styles.resultHeaderBackTitleStyle,
          headerTintColor: '#30363d',
        })}
        name="Result"
        component={Result}
      />
    </AppStack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#161B22',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  resultHeaderBackTitleStyle: {
    color: '#fff',
  },
});
