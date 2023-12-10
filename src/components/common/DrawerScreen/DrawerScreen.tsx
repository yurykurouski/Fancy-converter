import React from 'react';
import { ScrollView } from 'react-native';

import { useStyles } from './DrawerScreen.styles';

export const DrawerScreen = ({ children }: { children: JSX.Element }) => {
  const styles = useStyles();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}>
      {children}
    </ScrollView>
  );
};
