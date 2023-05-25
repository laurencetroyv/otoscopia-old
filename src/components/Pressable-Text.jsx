import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'react-native-paper';

export default function PressableText({ text, strongText, navigate }) {
  return (
    <TouchableOpacity onPress={navigate}>
      <Text className="text-center">
        <Text>{text}</Text>
        <Text className="font-bold">{strongText}</Text>
      </Text>
    </TouchableOpacity>
  );
}

PressableText.propTypes = {
  text: PropTypes.node.isRequired,
  strongText: PropTypes.node.isRequired,
  navigate: PropTypes.func.isRequired,
};