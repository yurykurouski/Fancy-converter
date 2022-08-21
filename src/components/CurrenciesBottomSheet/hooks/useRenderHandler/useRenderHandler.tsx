import React from 'react';
import { Pressable, View } from 'react-native';

import { useStyles } from './styles';

export const useRenderHandler = (onPress: () => void) => {
  const styles = useStyles();

  return () => (
    <View style={styles.handleContainer}>
      <Pressable style={styles.handlePressable} onPress={onPress}>
        <View style={styles.handle} />
      </Pressable>
    </View>
  );
};
