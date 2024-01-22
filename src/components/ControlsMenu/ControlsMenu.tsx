import React from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Counter } from 'components/Header/components/Counter';
import { RemoveSweep } from 'components/Header/components/RemoveSweep';
import { CONTROLS_OFFSET } from 'constants/index';

import { useStyles } from './ControlsMenu.styles';

type TProps = {
  headerSharedValue: SharedValue<number>;
};

export const ControlsMenu = React.memo<TProps>(({ headerSharedValue }) => {
  const styles = useStyles();

  const animStyle = useAnimatedStyle(() => {
    if (headerSharedValue.value < 0) {
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
      <Counter />
      <RemoveSweep />
    </Animated.View>
  );
});
