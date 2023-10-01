import React from 'react';
import { Pressable } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Animated, {
  SlideInDown,
  SlideInUp,
  SlideOutDown,
  SlideOutUp,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import {
  BLUR_AMOUNT,
  BLUR_RADIUS,
  DEFAULT_ANIMATION_DURATION,
} from 'constants/constants';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';

import { Counter } from './components/Counter';
import { RemoveSweep } from './components/RemoveSweep';

import { useStyles } from './Header.styles';

type Props = {
  onLongPress: () => void;
  isHeaderBlurred: boolean;
};

export const Header = React.memo<Props>(({ onLongPress, isHeaderBlurred }) => {
  const styles = useStyles(isHeaderBlurred);

  const { colorScheme } = useSelector(selectColorSchemeState);
  const { isInEditMode } = useSelector(selectSelectedCurrencies);

  return (
    <BlurView
      style={styles.blurView}
      overlayColor="transparent"
      blurAmount={BLUR_AMOUNT}
      blurRadius={BLUR_RADIUS}
      reducedTransparencyFallbackColor={
        THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
      }
      blurType={colorScheme!}
      pointerEvents="box-none">
      <Pressable onLongPress={onLongPress} style={styles.container}>
        {isInEditMode ? (
          <Animated.View
            style={styles.controlsContainer}
            entering={SlideInDown.duration(DEFAULT_ANIMATION_DURATION)}
            exiting={SlideOutDown.duration(DEFAULT_ANIMATION_DURATION)}>
            <Counter />
            <RemoveSweep />
          </Animated.View>
        ) : (
          <Animated.Text
            style={styles.header}
            entering={SlideInUp.duration(DEFAULT_ANIMATION_DURATION)}
            exiting={SlideOutUp.duration(DEFAULT_ANIMATION_DURATION)}>
            Fancy converter
          </Animated.Text>
        )}
      </Pressable>
    </BlurView>
  );
});
