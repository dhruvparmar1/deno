import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from 'screens';

export type AuthStackParamList = {
  Login: undefined;
};

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
