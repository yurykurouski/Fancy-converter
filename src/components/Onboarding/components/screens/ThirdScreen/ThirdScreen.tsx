import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  clamp,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { l } from 'resources/localization';

import { SwipeableExample } from './SwipeableExample';

import { useScreenStyles } from './ThirdScreen.styles';
import { useCommonOnboardingStyles } from 'components/Onboarding/Onboarding.styles';

const EXAMPLES = [5, 4, 3, 2, 1];

export const ThirdScreen = ({ windowWidth }: { windowWidth: number }) => {
  const styles = useScreenStyles(windowWidth);
  const textStyles = useCommonOnboardingStyles();

  const rippleAnimValue = useSharedValue(0);

  const screenTitle = l['onboarding_third-screen_title'];
  const screenSubTitleSwipe = l['onboarding_third-screen_subtitle-swipe'];

  const animatedStyle = useAnimatedStyle(() => {
    const scaleValue = clamp(rippleAnimValue.value, 0, 1);

    return {
      transform: [
        {
          scale: scaleValue,
        },
        {
          translateY: -rippleAnimValue.value,
        },
      ],
    };
  });

  useEffect(() => {
    rippleAnimValue.value = withRepeat(
      withDelay(2000, withTiming(255, { duration: 5000 })),
      -1,
    );
  }, [rippleAnimValue]);

  return (
    <View style={styles.container}>
      <Text style={[textStyles.mainText, textStyles.title]}>{screenTitle}</Text>
      <View style={styles.contentContainer}>
        <Text
          style={[
            textStyles.mainText,
            textStyles.title,
            styles.subTitle,
            textStyles.subTitle,
          ]}>
          {screenSubTitleSwipe}
        </Text>
        {EXAMPLES.map(value => (
          <SwipeableExample
            rippleAnimValue={rippleAnimValue}
            value={value}
            key={value}
          />
        ))}
        <Animated.View style={[styles.rippleBaseStyle, animatedStyle]} />
      </View>
    </View>
  );
};
