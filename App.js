import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-native-paper';
import AuthenticationProvider from './src/services/Authentication-Provider';
import Navigation from './src/infrastructure/navigation/Navigation';
import colors from './src/infrastructure/themes/colors';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <AuthenticationProvider>
      <Provider>
        <Navigation />
      </Provider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? colors.dark.background : colors.light.background}
      />
    </AuthenticationProvider>
  );
}
