import React from 'react';
import { View } from 'react-native';
import { Counter } from 'components/Header/components/Counter';
import { RemoveSweep } from 'components/Header/components/RemoveSweep';

import { useStyles } from './ControlsMenu.styles';

export const ControlsMenu = React.memo(() => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Counter />
      <RemoveSweep />
    </View>
  );
});
