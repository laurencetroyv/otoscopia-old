import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/accounts/Sign-in';
import SignUp from '../../features/accounts/Sign-up';
import LoadingScreen from '../../components/Loading-Screen';
import ForgotPassword from '../../features/accounts/Forgot-Password';

const Stack = createNativeStackNavigator();

function SignInScreen() {
  return <SignIn />;
}

function SignUpScreen() {
  return <SignUp />;
}

function ForgotPasswordScreen() {
  return <ForgotPassword />
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
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
      <Stack.Screen name="Loading" component={LoadingScreenFunction} />
    </Stack.Navigator>
  );
}
