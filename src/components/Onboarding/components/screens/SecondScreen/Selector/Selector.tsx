import React, { useContext, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { ThemeContext } from 'context';

import { useStyles } from './Selector.styles';

export const Selector = () => {
  const [isChecked, setIschecked] = useState(false);
  const { themeColors } = useContext(ThemeContext);

  const styles = useStyles();

  const onPressHandler = () => setIschecked(value => !value);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 2);
      setIschecked(!!randomValue);
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
          fillColor={themeColors.ACCENT_COLOR_LIGHTER}
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
