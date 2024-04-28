import React, { Ref } from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlashList } from '@shopify/flash-list';
import { Counter } from 'components/Header/components/Counter';
import { RemoveSweep } from 'components/Header/components/RemoveSweep';
import { Share } from 'components/Header/components/Share';
import { CONTROLS_OFFSET } from 'constants/index';
import { TAvailableCurrenciesNames } from 'types';

import { useStyles } from './ControlsMenu.styles';

type TProps = {
  headerSharedValue?: SharedValue<number>;
};

export const ControlsMenu = React.memo(
  React.forwardRef(
    (
      { headerSharedValue }: TProps,
      listRef: Ref<FlashList<TAvailableCurrenciesNames>>,
    ) => {
      const styles = useStyles();

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
          <Counter />
          <Share />
          <RemoveSweep ref={listRef} />
        </Animated.View>
      );
    },
  ),
);
