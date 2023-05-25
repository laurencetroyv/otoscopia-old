import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

export default function StyledButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      {/* eslint-disable-next-line react-native/no-raw-text */}
      <Button mode="contained">{text}</Button>
    </TouchableOpacity>
  );
}

StyledButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
