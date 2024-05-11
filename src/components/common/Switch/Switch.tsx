import React from 'react';
import { Switch as RNSwitch, View } from 'react-native';
import { Colors } from 'assets/colors';
import { isAndroid } from 'utils';

import { useStyles } from './Switch.styles';

type TProps = {
  value: boolean;
  onValueChange: (val: boolean) => void;
};

export const Switch = ({ value, onValueChange }: TProps) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <RNSwitch
        ios_backgroundColor={Colors?.ELEMENT_FADE_OR_BACKGROUND}
        trackColor={{
          false: Colors?.ELEMENT_FADE_OR_BACKGROUND,
          true: Colors?.ACCENT_COLOR_LIGHTER,
        }}
        thumbColor={isAndroid ? Colors?.ACCENT_COLOR_DARKER : undefined}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};
