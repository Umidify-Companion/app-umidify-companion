import React from 'react';
import Login from '../screens/signin/Login';
import RecoveryPassword from '../screens/signin/RecoveryPassword';
import EmailConfirmation from '../screens/signup/EmailConfirmation';
import Signup from '../screens/signup/Signup';
import PrincipalTabs from './HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="EsqueciSenha" component={RecoveryPassword} />
        <Stack.Screen options={{ headerShown: false }} name="Sucesso" component={EmailConfirmation} />
        <Stack.Screen options={{ headerShown: false }} name="Registro" component={Signup} />
        <Stack.Screen options={{ headerShown: false }} name="PrincipalTabs" component={PrincipalTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
