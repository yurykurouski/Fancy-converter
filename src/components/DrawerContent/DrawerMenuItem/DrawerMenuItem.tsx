import React from 'react';
import { Text, View } from 'react-native';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';

import { useStyles } from './DrawerMenuItem.styles';

export const DrawerMenuItem = ({ onPress, labelText, children }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ButtonWithIPadOSInteraction
        onPress={onPress}
        containerStyle={styles.labelContainer}>
        <Text style={styles.labelText} adjustsFontSizeToFit numberOfLines={2}>
          {labelText}
        </Text>
      </ButtonWithIPadOSInteraction>
      {children}
    </View>
  );
};
