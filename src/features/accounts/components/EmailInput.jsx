import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-paper';
import StyledTextInput from '../../../components/Styled-TextInput';

export default function EmailInput({ onChangeText, onEndEditing, showHelper }) {
  return (
    <StyledTextInput
      label="Email Address"
      autoCapitalize="none"
      autoComplete="email"
      inputMode="email"
      keyboardType="email-address"
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
      placeholder="@deped.edu.ph"
      textContentType="emailAddress"
      right={<TextInput.Icon icon="email" forceTextInputFocus={false} />}
      showHelper={showHelper}
      helperMessage="Invalid email address"
    />
  );
}

EmailInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func.isRequired,
  showHelper: PropTypes.bool.isRequired,
};
