import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './SubmitButton.styles';

export const SubmitButton = ({ onPress, type, title }) => {
  const buttonTypeStyle =
    type === 'acceptButton' ? styles.acceptButton : styles.cancelButton;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.button, buttonTypeStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
