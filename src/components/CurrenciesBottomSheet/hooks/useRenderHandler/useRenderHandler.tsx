import React from 'react';
import { View } from 'react-native';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';

import { useStyles } from './styles';

export const useRenderHandler = (onPress?: () => void) => {
  const styles = useStyles();

  return () => (
    <View style={styles.handleContainer}>
      <ButtonWithIPadOSInteraction
        containerStyle={styles.handlePressable}
        onPress={onPress}
        hitSlop={10}>
        <View style={styles.handle} />
      </ButtonWithIPadOSInteraction>
    </View>
  );
};
