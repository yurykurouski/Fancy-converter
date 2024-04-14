import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { THEME_COLORS } from 'assets/colors';
import { CheckIcon } from 'assets/icons';
import { AnimatedFlipIcon } from 'components/AnimatedFlipIcon';
import { colorSchemeStore } from 'store/valtio/colorSchemeStore';
import { useSnapshot } from 'valtio';

import { useStyles } from './Selector.styles';

export const Selector = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { colorScheme } = useSnapshot(colorSchemeStore);

  const styles = useStyles();

  const onPressHandler = () => setIsChecked(value => !value);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 2);
      setIsChecked(!!randomValue);
    }, 1500);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <View style={styles.currencyWrapper}>
      <Pressable
        onPress={onPressHandler}
        style={styles.currencyContainer}
        android_ripple={{ borderless: true }}>
        <View style={styles.currencyFlagPlaceholder} />
        <View style={styles.codeNameContainer}>
          <View style={styles.currencyCodePlaceholder} />
          <View style={styles.currencyNamePlaceholder} />
        </View>
        <AnimatedFlipIcon
          containerStyle={styles.iconContainer}
          nextState={isChecked}
          DefaultIcon={<View style={styles.checkbox} />}
          NextIcon={
            <CheckIcon
              size={30}
              color={THEME_COLORS[colorScheme!].FONT_PRIMARY_COLOR}
            />
          }
        />
      </Pressable>
    </View>
  );
};
