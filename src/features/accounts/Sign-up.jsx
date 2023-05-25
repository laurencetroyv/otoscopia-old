import { TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { Checkbox, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../components/Screen-Container';
import AnimatedIllustration from '../../assets/sign-up-illustration.json';
import EmailInput from './components/EmailInput';
import PressableText from '../../components/Pressable-Text';
import StyledButton from '../../components/Styled-Button';
import Policy from '../../components/Policy';
import Header from './components/Header';
import PhoneNumberInput from './components/Phone-Number-Input';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [phoneNumberError, setPhoneNumberError] = React.useState(false);

  const [checked, setChecked] = useState(false);
  const [modal, setModal] = useState(false);

  const navigation = useNavigation();

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
            secondTitle="Create an account"
            thirdTitle="now."
            subtitle="Please fill in the form to create a new account and continue"
          />
        </View>

        <View>
          <PhoneNumberInput
            onChangeText={setPhoneNumber}
            onEndEditing={() =>
              phoneNumber.length !== 11 ? setPhoneNumberError(true) : setPhoneNumberError(false)
            }
            showHelper={phoneNumberError}
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
          <Policy visible={modal} onDismiss={() => setModal(false)} />

          <View className="flex-row w-[90%] items-center">
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
            />

            <TouchableOpacity onPress={() => setModal(true)}>
              <Text>
                <Text>I agree to the </Text>
                <Text className="font-bold">terms & conditions </Text>
                <Text>and </Text>
                <Text className="font-bold">privacy policy</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <PressableText
            text="Already have an account?"
            strongText=" Click Here"
            onPress={() => navigation.navigate('Sign In')}
            center
          />
        </View>

        <View>
          <StyledButton text="Sign Up" />
        </View>
      </View>
    </ScreenContainer>
  );
}
