import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useStyles } from './SubmitButton.styles';

type Props = {
  onPress: () => void;
  type: string;
  title: string;
};

export const SubmitButton: React.FC<Props> = ({ onPress, type, title }) => {
  const styles = useStyles();

  const buttonTypeStyle =
    type === 'acceptButton' ? styles.acceptButton : styles.cancelButton;

  const buttonTypeTextStyle =
    type === 'acceptButton' ? styles.buttonTextAccept : styles.buttonTextCancel;

  return (
    <RectButton
      style={[styles.buttonWrapper, buttonTypeStyle]}
      onPress={onPress}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={[styles.buttonText, buttonTypeTextStyle]}>{title}</Text>
      </TouchableOpacity>
    </RectButton>
  );
};
