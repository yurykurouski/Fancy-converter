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

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.button, buttonTypeStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
