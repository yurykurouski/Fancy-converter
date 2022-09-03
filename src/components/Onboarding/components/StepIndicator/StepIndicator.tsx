import React, { useEffect } from 'react';
import { Animated } from 'react-native';

import { useChangeDotScale } from './StepIndicator.utils';

import { useStyles } from './StepIndicator.styles';

export const StepIndicator = ({ isActive }: { isActive: boolean }) => {
  const styles = useStyles();
  const { scaleValue, changeDotScale } = useChangeDotScale();

  useEffect(() => {
    changeDotScale(isActive);
  }, [changeDotScale, isActive]);

  return (
    <Animated.View
      style={[
        styles.container,
        { elevation: isActive ? 2 : 1 },
        { transform: [{ scale: scaleValue }] },
      ]}
    />
  );
};
