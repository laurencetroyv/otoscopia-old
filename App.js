import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-native-paper';
import AuthenticationProvider from './src/services/Authentication-Provider';
import Navigation from './src/infrastructure/navigation/Navigation';

export default function App() {
  return (
    <AuthenticationProvider>
      <Provider>
        <Navigation />
        <StatusBar style="auto" />{/* eslint-disable-line react/style-prop-object */}
      </Provider>
    </AuthenticationProvider>
  );
}
