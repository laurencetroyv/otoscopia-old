import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native-paper'
import { AuthenticationContext } from '../services/AuthenticationProvider'

export default function Navigation() {
  const {isAuthenticated} = useContext(AuthenticationContext)
  return (
    <NavigationContainer>
      {isAuthenticated ? <Text>Logged In</Text> : <Text>Sign In</Text>}      
    </NavigationContainer>
  )
}