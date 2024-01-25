import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  clamp,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { ControlsMenu } from 'components';
import { l } from 'resources/localization';

import { SwipeableExample } from './SwipeableExample';

import { useScreenStyles } from './ThirdScreen.styles';
import { useCommonOnboardingStyles } from 'components/Onboarding/Onboarding.styles';

const EXAMPLES = [5, 4, 3, 2, 1];

export const ThirdScreen = ({ windowWidth }: { windowWidth: number }) => {
  const styles = useScreenStyles(windowWidth);
  const textStyles = useCommonOnboardingStyles();

  const rippleSwipeAnimValue = useSharedValue(0);
  const ripplePressAnimValue = useSharedValue(0);

  const screenTitle = l['onboarding_third-screen_title'];
  const screenSubTitleSwipe = l['onboarding_third-screen_subtitle-swipe'];

  const animatedSwipeStyle = useAnimatedStyle(() => {
    const scaleValue = clamp(rippleSwipeAnimValue.value, 0, 1);

    return {
      transform: [
        {
          scale: scaleValue,
        },
        {
          translateY: -rippleSwipeAnimValue.value,
        },
      ],
    };
  });

  const animatedPressStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: ripplePressAnimValue.value,
        },
      ],
    };
  });

  const animatedPressRightStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(ripplePressAnimValue.value, [0, 1], [1, 0]);
    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
    };
  });

  useEffect(() => {
    rippleSwipeAnimValue.value = withRepeat(
      withDelay(2000, withTiming(255, { duration: 5000 })),
      -1,
    );
    ripplePressAnimValue.value = withRepeat(
      withTiming(1, { duration: 1000 }),
      -1,
      true,
    );
  }, [ripplePressAnimValue, rippleSwipeAnimValue]);

  return (
    <View style={styles.container}>
      <Text style={[textStyles.mainText, textStyles.title]}>{screenTitle}</Text>
      <View style={styles.contentContainer}>
        <Text style={[textStyles.mainText, textStyles.title, styles.subTitle]}>
          {screenSubTitleSwipe}
        </Text>
        {EXAMPLES.map(value => (
          <SwipeableExample
            rippleAnimValue={rippleSwipeAnimValue}
            value={value}
            key={value}
          />
        ))}
        <Animated.View
          style={[
            styles.rippleBaseStyle,
            styles.swipeRipple,
            animatedSwipeStyle,
          ]}
        />
      </View>
      <View style={styles.controls}>
        <ControlsMenu />
      </View>
      <Animated.View
        style={[styles.rippleBaseStyle, styles.pressRipple, animatedPressStyle]}
      />
      <Animated.View
        style={[
          styles.rippleBaseStyle,
          styles.pressRippleRight,
          animatedPressRightStyle,
        ]}
      />
    </View>
  );
};
