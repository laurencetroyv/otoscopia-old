import { View } from 'react-native';
import React, { useState } from 'react';
import { Divider, Text } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../components/Screen-Container';
import PasswordAnimation from '../../assets/password-animation.json';
import EmailInput from './components/EmailInput';
import StyledButton from '../../components/Styled-Button';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const navigation = useNavigation();

  return (
    <ScreenContainer enableKeyboardAvoidingView scrollEnabled>
      <View className="p-4 my-16 space-y-4 ">
        <View className="items-center">
          <AnimatedLottieView source={PasswordAnimation} autoPlay loop className="w-3/4" />
        </View>

        <View>
          <Divider />
        </View>

        <View>
          <Text className="font-bold text-3xl text-primary">Forgot Password?</Text>
          <Text className="text-sm w-3/4">
            Worry not! just full in the form below to reset your password!
          </Text>
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
          <StyledButton text="Continue" onPress={() => navigation.navigate('Pin')} />
        </View>
      </View>
    </ScreenContainer>
  );
}
