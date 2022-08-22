import { useCallback, useMemo } from 'react';
import { Animated } from 'react-native';

import { UseHandleDeletePress } from './FlagButton.types';

export const useHandleDeletePress = ({
  setIsReadyToDelete,
  selectedCurrencies,
  currencyCode,
  setSelectedCurrencies,
}: UseHandleDeletePress) =>
  useCallback(() => {
    setIsReadyToDelete(false);

    const filteredCurrencies = selectedCurrencies.filter(
      el => el !== currencyCode,
    );
    setSelectedCurrencies(filteredCurrencies);
  }, [
    currencyCode,
    selectedCurrencies,
    setIsReadyToDelete,
    setSelectedCurrencies,
  ]);

export const useFlipImageAnimation = (isReadyToDelete: boolean) => {
  const animatedValue = useMemo(() => new Animated.Value(180), []);

  const flipImageAnimation = useCallback(() => {
    if (isReadyToDelete) {
      Animated.spring(animatedValue, {
        toValue: 360,
        tension: 10,
        friction: 8,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
        useNativeDriver: true,
      }).start();
    }
  }, [animatedValue, isReadyToDelete]);

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const rotateYAnimatedStyle = {
    transform: [{ rotateX: setInterpolate }],
  };

  return {
    flipImageAnimation,
    rotateYAnimatedStyle,
  };
};
