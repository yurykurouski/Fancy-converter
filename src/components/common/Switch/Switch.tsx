import React from 'react';
import { Switch as RNSwitch, View } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { isAndroid } from 'utils';

import { useStyles } from './Switch.styles';

type TProps = {
  value: boolean;
  onValueChange: (val: boolean) => void;
};

export const Switch = ({ value, onValueChange }: TProps) => {
  const styles = useStyles();
  const { colorScheme } = useSelector(selectColorSchemeState);

  return (
    <View style={styles.container}>
      <RNSwitch
        ios_backgroundColor={
          THEME_COLORS[colorScheme!].ELEMENT_FADE_OR_BACKGROUND
        }
        trackColor={{
          false: THEME_COLORS[colorScheme!].ELEMENT_FADE_OR_BACKGROUND,
          true: THEME_COLORS[colorScheme!].ACCENT_COLOR_LIGHTER,
        }}
        thumbColor={
          isAndroid ? THEME_COLORS[colorScheme!].ACCENT_COLOR_DARKER : undefined
        }
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};
