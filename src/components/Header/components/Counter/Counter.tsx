import React from 'react';
import { Pressable } from 'react-native';
import Animated, { SlideInUp } from 'react-native-reanimated';
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

  const { selectedCurrenciesInEdit } = useSelector(selectSelectedCurrencies);

  const cancelEditMode = useSetSelectedCurrEditMode();
  const clearSelectedCurrenciesInEdit = useClearSelectedCurrenciesInEdit();

  const onCancelPress = () => {
    cancelEditMode(false);
    clearSelectedCurrenciesInEdit(undefined);
  };

  return (
    <Pressable
      onPress={onCancelPress}
      pressRetentionOffset={5}
      style={styles.container}
      hitSlop={5}
      android_ripple={rippleConfig}>
      <CancelButton pointerEvents="none" />
      <Animated.Text
        style={styles.counterText}
        layout={SlideInUp.duration(DEFAULT_ANIMATION_DURATION)}>
        {selectedCurrenciesInEdit.length}
      </Animated.Text>
    </Pressable>
  );
};
