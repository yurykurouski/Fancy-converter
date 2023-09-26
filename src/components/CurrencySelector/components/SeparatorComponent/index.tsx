import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 10,
  },
});

export const SeparatorComponent = () => {
  return <View style={styles.container} />;
};
