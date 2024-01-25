import React from 'react';
import { View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { Counter } from 'components/Header/components/Counter';
import { RemoveSweep } from 'components/Header/components/RemoveSweep';
import { Share } from 'components/Header/components/Share';
import { BLUR_AMOUNT, BLUR_RADIUS, CONTROLS_OFFSET } from 'constants/index';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { useStyles } from './ControlsMenu.styles';

type TProps = {
  headerSharedValue?: SharedValue<number>;
};

export const ControlsMenu = React.memo<TProps>(({ headerSharedValue }) => {
  const styles = useStyles();

  const { colorScheme } = useSelector(selectColorSchemeState);

  const animStyle = useAnimatedStyle(() => {
    if (headerSharedValue?.value && headerSharedValue.value < 0) {
      return {
        transform: [
          {
            translateY: headerSharedValue.value * CONTROLS_OFFSET,
          },
        ],
      };
    } else {
      return {};
    }
  });

  return (
    <Animated.View style={[styles.container, animStyle]}>
      <BlurView
        style={styles.blur}
        overlayColor="transparent"
        blurAmount={BLUR_AMOUNT}
        blurRadius={BLUR_RADIUS}
        reducedTransparencyFallbackColor={
          THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
        }
        blurType={colorScheme!}
        pointerEvents="box-none">
        <View style={styles.wrapper}>
          <Counter />
          <Share />
          <RemoveSweep />
        </View>
      </BlurView>
    </Animated.View>
  );
});
