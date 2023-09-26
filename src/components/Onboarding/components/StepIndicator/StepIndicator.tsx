import React, { useEffect } from 'react';
import { Animated } from 'react-native';

import { useChangeDotScale } from './StepIndicator.utils';

import { useStyles } from './StepIndicator.styles';

export const StepIndicator = ({ isActive }: { isActive: boolean }) => {
  const styles = useStyles(isActive);
  const { scaleValue, changeDotScale } = useChangeDotScale();

  useEffect(() => {
    changeDotScale(isActive);
  }, [changeDotScale, isActive]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scaleValue }] }]}
    />
  );
};
