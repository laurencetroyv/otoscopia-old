import { TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
// import AnimatedLottieView from 'lottie-react-native';
import ScreenContainer from '../../components/Screen-Container';
import StyledTextInput from '../../components/Styled-TextInput';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  return (
    <ScreenContainer enableKeyboardAvoidingView scrollEnabled>
      <View className="p-4">
        {/* <AnimatedLottieView source={} */}

        <View className="space-y-4">
          <Text className="font-bold text-3xl text-primary">Forgot Password?</Text>
          <Text className="text-sm w-3/4">
            Worry not! just full in the form below to reset your password!
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
          helperMessage="Must be a valid deped.edu email address"
        />

        <TouchableOpacity>
          {/* eslint-disable-next-line react-native/no-raw-text */}
          <Button mode="contained">Continue</Button>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}
