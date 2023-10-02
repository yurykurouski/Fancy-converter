import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { CancelButton } from 'components/common/CancelButton';
import { DEFAULT_ANIMATION_DURATION } from 'constants/constants';
import { useAndroidRippleConfig } from 'hooks';
import {
  useClearSelectedCurrenciesInEdit,
  useSetSelectedCurrEditMode,
} from 'hooks/store/SelectedCurrencies';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';

import { useStyles } from './Counter.styles';

export const Counter = () => {
  const styles = useStyles();
  const rippleConfig = useAndroidRippleConfig();

  const animatedOffset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: -animatedOffset.value,
        },
      ],
    };
  });

  const { selectedCurrenciesInEdit, selectedCurrencies } = useSelector(
    selectSelectedCurrencies,
  );

  const cancelEditMode = useSetSelectedCurrEditMode();
  const clearSelectedCurrenciesInEdit = useClearSelectedCurrenciesInEdit();

  const onCancelPress = () => {
    cancelEditMode(false);
    clearSelectedCurrenciesInEdit(undefined);
  };
  useEffect(() => {
    animatedOffset.value = withTiming(selectedCurrenciesInEdit.length * 20, {
      duration: DEFAULT_ANIMATION_DURATION,
    });
  }, [animatedOffset, selectedCurrenciesInEdit.length]);

  return (
    <Pressable
      onPress={onCancelPress}
      style={styles.container}
      hitSlop={5}
      android_ripple={rippleConfig}>
      <CancelButton pointerEvents="none" />
      <View style={styles.counterContainer}>
        <Animated.View style={[animatedStyle]}>
          <Text style={styles.counterText}>{''}</Text>
          {Object.keys(selectedCurrencies).map(el => (
            <Text key={el} style={styles.counterText}>
              {Number(el) + 1}
            </Text>
          ))}
        </Animated.View>
      </View>
    </Pressable>
  );
};
