import React from 'react';
import { TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';
import StyledTextInput from '../../../components/Styled-TextInput';

export default function PasswordInput({
  onChangeText,
  onEndEditing,
  secureTextEntry,
  onPress,
  showHelper,
}) {
  return (
    <StyledTextInput
      label="Password"
      autoComplete="password"
      autoCapitalize="none"
      inputMode="text"
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
      placeholder="P@ssw0rd"
      secureTextEntry={secureTextEntry}
      textContentType="password"
      right={
        <TextInput.Icon
          icon={secureTextEntry ? 'eye' : 'eye-outline'}
          onPress={onPress}
          forceTextInputFocus={false}
        />
      }
      showHelper={showHelper}
      helperMessage="Invalid password"
    />
  );
}

PasswordInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  showHelper: PropTypes.bool.isRequired,
};
