import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from './NavigationContainer';

import {useAuth} from 'stores/auth';
import {AuthNavigator, MainNavigator} from './stack';

const Stack = createNativeStackNavigator();

export const Root = () => {
  const {status} = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        // cardOverlayEnabled: false,
        headerShown: false,
        gestureEnabled: false,
        animationTypeForReplace: status === 'signIn' ? 'push' : 'pop',
      }}>
      {status === 'signIn' ? (
        <Stack.Screen name="App" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
