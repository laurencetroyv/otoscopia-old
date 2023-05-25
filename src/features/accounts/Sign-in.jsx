import { View } from 'react-native';
import React, { useState } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../components/Screen-Container';
import AnimatedIllustration from '../../assets/sign-in-illustration.json';
import Header from './components/Header';
import StyledButton from '../../components/Styled-Button';
import PressableText from '../../components/Pressable-Text';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordSecure, setPasswordSecure] = useState(true);

  return (
    <ScreenContainer enableKeyboardAvoidingView scrollEnabled>
      <View className="p-4 space-y-4">
        <AnimatedLottieView source={AnimatedIllustration} autoPlay loop className="w-full" />

        <View>
          <Divider />
        </View>

        <View>
          <Header
            title="Hello"
            secondTitle="Login Now"
            subtitle="Please fill in the form to create a new account and continue"
          />
        </View>

        <View>
          <EmailInput
            onChangeText={setEmail}
            onEndEditing={() =>
              !email.includes('@deped.edu.ph') ? setEmailError(true) : setEmailError(false)
            }
            showHelper={emailError}
          />
        </View>

        <View>
          <PasswordInput
            onChangeText={setPassword}
            onPress={() => setPasswordSecure(!passwordSecure)}
            onEndEditing={() =>
              !(password.length >= 8) ? setPasswordError(true) : setPasswordError(false)
            }
            secureTextEntry={passwordSecure}
            showHelper={passwordError}
          />
        </View>

        <View>
          <StyledButton text="Sign In" />
        </View>

        <View>
          <PressableText
            text="Don&lsquo;t have have an account?"
            strongText=" Register here"
            onPress={() => navigation.navigate('Sign Up')}
            center
          />
        </View>

        <View>
          <PressableText
            text="Forgot password?"
            strongText=" Click here"
            onPress={() => navigation.navigate('Forgot Password')}
            center
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
