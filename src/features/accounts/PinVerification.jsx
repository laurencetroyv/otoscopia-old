/* eslint-disable react-native/no-color-literals */
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import ReactNativePinView from 'react-native-pin-view';
import AnimatedLottieView from 'lottie-react-native';
import { ArrowUturnLeftIcon, CheckCircleIcon } from 'react-native-heroicons/outline/';
import ScreenContainer from '../../components/Screen-Container';
import PasswordAnimation from '../../assets/password-animation.json';
import colors from '../../infrastructure/themes/colors';

export default function PinVerification() {
  const colorScheme = useColorScheme();
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [showCompletedButton, setShowCompletedButton] = useState(false);

  const styles = StyleSheet.create({
    buttonAreaStyle: {
      marginTop: 24,
    },

    buttonTextStyle: {
      color: colorScheme === 'dark' ? colors.dark.onSecondary : colors.light.onSurface,
    },

    buttonViewStyle: {
      borderColor: colorScheme === 'dark' ? colors.dark.onSecondary : colors.light.onSurface,
      borderWidth: 1,
    },

    inputAreaStyle: {
      marginBottom: 24,
    },

    inputViewEmptyStyle: {
      backgroundColor: 'transparent',
      borderColor: colorScheme === 'dark' ? colors.dark.onSecondary : colors.light.onSurface,
      borderWidth: 1,
    },

    inputViewFilledStyle: {
      backgroundColor: colorScheme === 'dark' ? colors.dark.onSecondary : colors.light.onSurface,
    },
  });

  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 8) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);

  return (
    <ScreenContainer enableKeyboardAvoidingView scrollEnabled>
      <View className="p-4 flex-1 justify-center items-center">
        <AnimatedLottieView source={PasswordAnimation} autoPlay loop className="w-3/4" />
        <ReactNativePinView
          buttonAreaStyle={styles.buttonAreaStyle}
          inputAreaStyle={styles.inputAreaStyle}
          inputViewEmptyStyle={styles.inputViewEmptyStyle}
          inputViewFilledStyle={styles.inputViewFilledStyle}
          buttonViewStyle={styles.buttonViewStyle}
          buttonTextStyle={styles.buttonTextStyle}
          buttonArea="mt-8"
          inputSize={32}
          ref={pinView}
          pinLength={6}
          buttonSize={64}
          onValueChange={(value) => setEnteredPin(value)}
          onButtonPress={(key) => {
            if (key === 'custom_left') {
              pinView.current.clear();
            }
            if (key === 'custom_right') {
              alert(`Entered Pin: ${enteredPin}`);
            }
            if (key === 'three') {
              alert('You just click to 3');
            }
          }}
          customLeftButton={
            showRemoveButton ? <ArrowUturnLeftIcon size={36} color="#FFF" /> : undefined
          }
          customRightButton={
            showCompletedButton ? <CheckCircleIcon size={36} color="#FFF" /> : undefined
          }
        />
      </View>
    </ScreenContainer>
  );
}
