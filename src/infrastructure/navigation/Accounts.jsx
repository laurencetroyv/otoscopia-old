import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/Accounts/Sign-in';

const Stack = createNativeStackNavigator();

function SignInScreen() {
  return <SignIn />;
}

export default function Accounts() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Sign In" component={SignInScreen} />
    </Stack.Navigator>
  );
}
