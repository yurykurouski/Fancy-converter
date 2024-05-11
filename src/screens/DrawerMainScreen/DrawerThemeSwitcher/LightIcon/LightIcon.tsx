import React from 'react';
import { View } from 'react-native';
import { LightModeIcon } from 'assets/icons';

import { styles } from './LightIcon.styles';

export const LightIcon = () => {
  return (
    <View style={styles.container}>
      <LightModeIcon />
    </View>
  );
};
