import React from 'react';
import { Text } from 'react-native';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';

import { useStyles } from './DrawerMenuItem.styles';

type TProps = {
  onPress: () => void;
  labelText: string;
  children: JSX.Element;
};

export const DrawerMenuItem = ({ onPress, labelText, children }: TProps) => {
  const styles = useStyles();

  return (
    <ButtonWithIPadOSInteraction
      onPress={onPress}
      containerStyle={styles.container}>
      <Text style={styles.labelText} adjustsFontSizeToFit numberOfLines={2}>
        {labelText}
      </Text>
      {children}
    </ButtonWithIPadOSInteraction>
  );
};
