import { View } from 'react-native';
import React from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

export default function StyledTextInput({
  label,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  editable,
  importantForAutofill,
  inputMode,
  keyboardType,
  maxLength,
  onChangeText,
  onEndEditing,
  placeholder,
  secureTextEntry,
  textContentType,
  left,
  right,
  showHelper,
  helperMessage,
}) {
  return (
    <View className="my-2">
      <TextInput
        mode="outlined"
        label={label}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        caretHidden
        editable={editable}
        enablesReturnKeyAutomatically
        importantForAutofill={importantForAutofill}
        inputMode={inputMode}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        left={left}
        right={right}
        error={showHelper}
      />
      {showHelper && <HelperText>{helperMessage}</HelperText>}
    </View>
  );
}

StyledTextInput.propTypes = {
  label: PropTypes.node.isRequired,
  autoCapitalize: PropTypes.node,
  autoComplete: PropTypes.node,
  autoCorrect: PropTypes.bool,
  editable: PropTypes.bool,
  importantForAutofill: PropTypes.node,
  inputMode: PropTypes.node,
  keyboardType: PropTypes.node,
  maxLength: PropTypes.node,
  onChangeText: PropTypes.func,
  onEndEditing: PropTypes.func,
  placeholder: PropTypes.node.isRequired,
  secureTextEntry: PropTypes.bool,
  textContentType: PropTypes.node.isRequired,
  left: PropTypes.node,
  right: PropTypes.node,
  showHelper: PropTypes.bool,
  helperMessage: PropTypes.node.isRequired,
};

StyledTextInput.defaultProps = {
  autoCapitalize: 'words',
  autoComplete: 'off',
  autoCorrect: false,
  editable: true,
  importantForAutofill: 'yes',
  inputMode: 'text',
  keyboardType: 'default',
  maxLength: 32,
  onChangeText: () => {},
  onEndEditing: () => {},
  secureTextEntry: false,
  left: null,
  right: null,
  showHelper: false,
};
