import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { selectedCurrenciesStore } from 'store/selectedCurrenciesStore';
import { useSnapshot } from 'valtio';

import { useStyles } from './styles';

export const useRenderHandler = (onPress?: () => void) => {
  const styles = useStyles();
  const { currencies } = useSnapshot(selectedCurrenciesStore);

  const animatedHandlerValue = useSharedValue(1);

  const isEmpty = !Object.keys(currencies).length;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleX: animatedHandlerValue.value,
        },
      ],
    };
  });

  useEffect(() => {
    if (isEmpty) {
      animatedHandlerValue.value = withRepeat(
        withSequence(withDelay(3000, withSpring(1)), withSpring(1.2)),
        -1,
        true,
      );
    } else {
      cancelAnimation(animatedHandlerValue);
      animatedHandlerValue.value = withSpring(1);
    }
  }, [isEmpty, animatedHandlerValue]);

  return () => (
    <Animated.View style={[styles.handleContainer, animatedStyle]}>
      <ButtonWithIPadOSInteraction
        containerStyle={styles.handlePressable}
        onPress={onPress}
        hitSlop={10}>
        <View style={styles.handle} />
      </ButtonWithIPadOSInteraction>
    </Animated.View>
  );
};
