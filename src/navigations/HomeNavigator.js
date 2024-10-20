import React from 'react';
import Home from '../screens/home/Home';
import PrincipalWeather from '../screens/PrincipalWeather';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from '../context/user/UserContext';

const HomeStack = createNativeStackNavigator();

export default function PrincipalTabs() {
  return (
    <UserProvider>
      <HomeStack.Navigator>
        <HomeStack.Screen options={{ headerShown: false }} name="Principal" component={Home} />
        <HomeStack.Screen
          options={{ headerShown: false }}
          name="PrincipalWeather"
          component={PrincipalWeather}
        />
      </HomeStack.Navigator>
    </UserProvider>
  );
}
