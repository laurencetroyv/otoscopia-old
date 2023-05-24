import { TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../components/Screen-Container';
import StyledTextInput from '../../components/Styled-TextInput';
import AnimatedIllustration from '../../assets/sign-in-illustration.json';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordSecure, setPasswordSecure] = useState(true);

  return (
    <ScreenContainer enableKeyboardAvoidingView scrollEnabled>
      <View className="flex-1 p-4">
        <AnimatedLottieView source={AnimatedIllustration} autoPlay loop className="w-full" />

        <Divider className="mb-4" />

        <View className="mb-6">
          <Text className="font-bold text-3xl text-primary">Hello</Text>
          <Text className="font-bold text-3xl">Login now.</Text>
          <Text className="text-sm w-3/4 leading-4 mt-4">
            Please fill in the form to create a new account and continue
          </Text>
        </View>

        <StyledTextInput
          label="Email Address"
          autoCapitalize="words"
          autoComplete="email"
          inputMode="email"
          keyboardType="email-address"
          onChangeText={setEmail}
          onEndEditing={() =>
            !email.includes('@deped.edu.ph') ? setEmailError(true) : setEmailError(false)
          }
          placeholder="@deped.edu.ph"
          textContentType="emailAddress"
          right={<TextInput.Icon icon="email" forceTextInputFocus={false} />}
          showHelper={emailError}
          helperMessage="Invalid email address"
        />

        <StyledTextInput
          label="Password"
          autoComplete="password"
          autoCapitalize="none"
          inputMode="text"
          onChangeText={setPassword}
          onEndEditing={() =>
            !(password.length >= 8) ? setPasswordError(true) : setPasswordError(false)
          }
          placeholder="P@ssw0rd"
          secureTextEntry={passwordSecure}
          textContentType="password"
          right={
            <TextInput.Icon
              icon={passwordSecure ? 'eye' : 'eye-outline'}
              onPress={() => setPasswordSecure(!passwordSecure)}
              forceTextInputFocus={false}
            />
          }
          showHelper={passwordError}
          helperMessage="Invalid password"
        />

        <View className="space-y-4 mt-4">
          <TouchableOpacity>
            <Button mode="contained">
              <Text>Sign In</Text>
            </Button>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
            <Text className="text-center">
              <Text>Don&lsquo;t have have an account?</Text>
              <Text className="font-bold"> Register here</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
            <Text className="text-center">
              <Text>forgot password?</Text>
              <Text className="font-bold"> Click here</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
}
