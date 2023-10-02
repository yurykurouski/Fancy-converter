import React, { ReactElement, useEffect, useRef } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { DEFAULT_ANIMATION_DURATION } from 'constants/constants';

import { styles } from './AnimatedFlipIcon.styles';

type TProps = {
  nextState: boolean;
  DefaultIcon: ReactElement<any>;
  NextIcon: ReactElement<any>;
  size?: number;
};

export const AnimatedFlipIcon = ({
  nextState,
  DefaultIcon,
  NextIcon,
}: TProps) => {
  const animatedRotateValue = useSharedValue(0);
  const animatedDefaultIconOpacity = useSharedValue(1);
  const animatedNextIconOpacity = useSharedValue(0);

  const changedStateRef = useRef(false);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 100 },
        { rotateY: `${animatedRotateValue.value}deg` },
      ],
    };
  });

  const animatedDefaultIconStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedDefaultIconOpacity.value,
    };
  });
  const animatedNextIconStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedNextIconOpacity.value,
    };
  });

  useEffect(() => {
    if (nextState) {
      animatedRotateValue.value = withTiming(180, {
        duration: DEFAULT_ANIMATION_DURATION,
      });

      animatedDefaultIconOpacity.value = withTiming(0, {
        duration: DEFAULT_ANIMATION_DURATION,
      });
      animatedNextIconOpacity.value = withTiming(1, {
        duration: DEFAULT_ANIMATION_DURATION,
      });

      changedStateRef.current = true;
    } else if (changedStateRef.current) {
      animatedRotateValue.value = withTiming(0, {
        duration: DEFAULT_ANIMATION_DURATION,
      });

      animatedDefaultIconOpacity.value = withTiming(1, {
        duration: DEFAULT_ANIMATION_DURATION,
      });
      animatedNextIconOpacity.value = withTiming(0, {
        duration: DEFAULT_ANIMATION_DURATION,
      });

      changedStateRef.current = false;
    }
  }, [
    animatedDefaultIconOpacity,
    animatedNextIconOpacity,
    animatedRotateValue,
    nextState,
  ]);

  return (
    <Animated.View style={animatedContainerStyle}>
      <Animated.View style={[styles.iconContainer, animatedNextIconStyle]}>
        {NextIcon}
      </Animated.View>
      <Animated.View style={animatedDefaultIconStyle}>
        {DefaultIcon}
      </Animated.View>
    </Animated.View>
  );
};
