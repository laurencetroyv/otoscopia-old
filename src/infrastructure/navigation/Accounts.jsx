import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/accounts/Sign-in';
import SignUp from '../../features/accounts/Sign-up';
import LoadingScreen from '../../components/Loading-Screen';

const Stack = createNativeStackNavigator();

function SignInScreen() {
  return <SignIn />;
}

function SignUpScreen() {
  return <SignUp />;
}

function LoadingScreenFunction() {
  return <LoadingScreen />;
}

export default function Accounts() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Loading" component={LoadingScreenFunction} />
    </Stack.Navigator>
  );
}
