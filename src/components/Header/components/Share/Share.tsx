import React, { memo, useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ShareIOsIcon } from 'assets/icons';
import { ShareIcon } from 'assets/icons/ShareIcon';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { DEFAULT_ANIMATION_DURATION } from 'constants/index';
import { focusedCurrencyStore } from 'store/focusedCurrencyStore';
import { selectedForEditStore } from 'store/selectedForEditStore';
import { isIos } from 'utils';
import { useSnapshot } from 'valtio';

import { useHandlePress } from './Share.hooks';

import { styles } from './Share.styles';

export const Share = memo(() => {
  const { selectedCurrencies } = useSnapshot(selectedForEditStore);
  const { focusedCurrencyValue } = useSnapshot(focusedCurrencyStore);

  const opacityValue = useSharedValue(1);

  const handlePress = useHandlePress();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  useEffect(() => {
    if (Object.keys(selectedCurrencies).length < 2 || !focusedCurrencyValue) {
      opacityValue.value = withTiming(0.3, {
        duration: DEFAULT_ANIMATION_DURATION,
      });
    } else {
      opacityValue.value = withTiming(1, {
        duration: DEFAULT_ANIMATION_DURATION,
      });
    }
  }, [focusedCurrencyValue, opacityValue, selectedCurrencies]);

  return (
    <ButtonWithIPadOSInteraction
      onPress={handlePress}
      containerStyle={styles.container}
      hitSlop={5}>
      <Animated.View style={animatedStyle}>
        {isIos ? <ShareIOsIcon size={24} /> : <ShareIcon size={24} />}
      </Animated.View>
    </ButtonWithIPadOSInteraction>
  );
});
