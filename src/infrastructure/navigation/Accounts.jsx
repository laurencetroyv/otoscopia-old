import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/accounts/Sign-in';
import SignUp from '../../features/accounts/Sign-up';

const Stack = createNativeStackNavigator();

function SignInScreen() {
  return <SignIn />;
}

function SignUpScreen() {
  return <SignUp />;
}

export default function Accounts() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
