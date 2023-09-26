import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { useStyles } from './Selector.styles';

export const Selector = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { colorScheme } = useSelector(selectColorSchemeState);

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
        <BouncyCheckbox
          size={30}
          fillColor={THEME_COLORS[colorScheme!].ACCENT_COLOR_LIGHTER}
          onPress={onPressHandler}
          isChecked={isChecked}
          disableBuiltInState
          bounceFriction={4}
          style={styles.checkbox}
        />
      </Pressable>
    </View>
  );
};
