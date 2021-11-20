import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './SubmitButton.styles';

type Props = {
  onPress: () => void;
  type: string;
  title: string;
};

export const SubmitButton: React.FC<Props> = ({ onPress, type, title }) => {
  const buttonTypeStyle =
    type === 'acceptButton' ? styles.acceptButton : styles.cancelButton;

  const buttonTypeTextStyle =
    type === 'acceptButton' ? styles.buttonTextAccept : styles.buttonTextCancel;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonTypeStyle]}>
      <Text style={[styles.buttonText, buttonTypeTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
