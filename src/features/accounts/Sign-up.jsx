import { ScrollView, StyleSheet, TouchableOpacity, View, useColorScheme } from 'react-native';
import React, { useEffect, useState } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { Button, Checkbox, Divider, Modal, Portal, Text, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CountryFlag from 'react-native-country-flag';
import ScreenContainer from '../../components/Screen-Container';
import StyledTextInput from '../../components/Styled-TextInput';
import colors from '../../infrastructure/themes/colors';
import { PrivacyPolicy, TermsAndConditions } from '../../services/mock-data';
import AnimatedIllustration from '../../assets/sign-up-illustration.json';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [phoneNumber, setPhoneNumber] = React.useState('');

  const colorScheme = useColorScheme();

  const [checked, setChecked] = useState(false);
  const [modal, setModal] = useState(false);

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    modalStyle: {
      backgroundColor: colorScheme === 'dark' ? colors.dark.surface : colors.light.surface,
      borderRadius: 5,
      marginHorizontal: 16,
      maxHeight: '70%',
      padding: 20,
    },
    textInputIcon: {
      borderRadius: 0,
    },
  });

  const icon = ({ size }) => <CountryFlag isoCode="ph" size={size} />;

  useEffect(() => {
    const cleanPhoneNumber = phoneNumber.replace(/\s/g, '');

    if (cleanPhoneNumber.length === 11) {
      const formatPhoneNumber = `${cleanPhoneNumber.substring(0, 4)} ${cleanPhoneNumber.substring(
        4,
        7
      )} ${cleanPhoneNumber.substring(7, 11)}`;
      setPhoneNumber(formatPhoneNumber);
    }
  }, [phoneNumber]);

  return (
    <ScreenContainer enableKeyboardAvoidingView scrollEnabled>
      <View className="p-4">
        <AnimatedLottieView source={AnimatedIllustration} autoPlay loop className="w-full" />

        <Divider className="my-4" />

        <View className="mb-6">
          <Text className="font-bold text-3xl text-primary">Hello</Text>
          <Text className="font-bold text-3xl">Create an account</Text>
          <Text className="font-bold text-3xl">now.</Text>
          <Text className="text-sm w-3/4 leading-4 mt-4">
            Please fill in the form to create a new account and continue
          </Text>
        </View>

        <StyledTextInput
          mode="outlined"
          label="Phone Number"
          inputMode="numeric"
          keyboardType="numeric"
          maxLength={11}
          onChangeText={setPhoneNumber}
          placeholder="09"
          textContentType="none"
          left={<TextInput.Icon style={styles.textInputIcon} icon={icon} />}
          showHelper={emailError}
          helperMessage="Invalid mobile number"
        />

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

        <View className="my-4">
          <Portal>
            <Modal
              visible={modal}
              onDismiss={() => setModal(false)}
              contentContainerStyle={styles.modalStyle}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text className="font-bold text-2xl text-center">Terms and Conditions</Text>
                <Text>{TermsAndConditions}</Text>

                <Text className="font-bold text-2xl text-center">Privacy Policy</Text>
                <Text>{PrivacyPolicy}</Text>
              </ScrollView>
            </Modal>
          </Portal>

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

        <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
          <Text className="text-center mb-4">
            <Text>Already have an account?</Text>
            <Text className="text-primary font-bold"> Click Here</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          {/* eslint-disable-next-line react-native/no-raw-text */}
          <Button mode="contained">Sign Up</Button>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}
