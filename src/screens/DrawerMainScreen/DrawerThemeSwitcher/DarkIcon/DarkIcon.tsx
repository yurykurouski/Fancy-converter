import React from 'react';
import { View } from 'react-native';
import { DarkModeIcon } from 'assets/icons';

import { styles } from './DarkIcon.styles';

export const DarkIcon = () => {
  return (
    <View style={styles.container}>
      <DarkModeIcon />
    </View>
  );
};
