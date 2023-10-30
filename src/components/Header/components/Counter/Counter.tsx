import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { CancelButton } from 'components/common/CancelButton';
import { DEFAULT_ANIMATION_DURATION } from 'constants/constants';
import { useSetSelectedCurrEditMode } from 'hooks/store/SelectedCurrencies';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';

import { useStyles } from './Counter.styles';

export const Counter = () => {
  const styles = useStyles();

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

  const { selectedCurrenciesInEdit, currencies } = useSelector(
    selectSelectedCurrencies,
  );

  const setEditMode = useSetSelectedCurrEditMode();

  const onCancelPress = () => {
    setEditMode(false);
  };
  useEffect(() => {
    animatedOffset.value = withTiming(selectedCurrenciesInEdit.length * 20, {
      duration: DEFAULT_ANIMATION_DURATION,
    });
  }, [animatedOffset, selectedCurrenciesInEdit.length]);

  return (
    <ButtonWithIPadOSInteraction
      onPress={onCancelPress}
      containerStyle={styles.container}
      hitSlop={5}>
      <CancelButton pointerEvents="none" />
      <View style={styles.counterContainer}>
        <Animated.View style={[animatedStyle]}>
          <Text style={styles.counterText}>{''}</Text>
          {Object.keys(currencies).map((_, i) => (
            <Text key={i} style={styles.counterText}>
              {Number(i) + 1}
            </Text>
          ))}
        </Animated.View>
      </View>
    </ButtonWithIPadOSInteraction>
  );
};
