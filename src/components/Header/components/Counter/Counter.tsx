import React, { useEffect } from 'react';
import { InteractionManager, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { CancelButton } from 'components/common/CancelButton';
import { DEFAULT_ANIMATION_DURATION } from 'constants/index';
import { editModeActions } from 'store/editModeStore';
import { selectedCurrenciesStore } from 'store/selectedCurrenciesStore';
import { selectedForEditStore } from 'store/selectedForEditStore';
import { useSnapshot } from 'valtio';

import { useStyles } from './Counter.styles';

export const Counter = () => {
  const styles = useStyles();

  const animatedOffset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: -animatedOffset.value,
        },
      ],
    };
  });

  const { currencies } = useSnapshot(selectedCurrenciesStore);
  const { selectedCurrencies } = useSnapshot(selectedForEditStore);

  const onCancelPress = () => {
    editModeActions.setEditMode(false);
  };
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      animatedOffset.value = withTiming(
        Object.keys(selectedCurrencies).length * 20,
        {
          duration: DEFAULT_ANIMATION_DURATION,
        },
      );
    });
  }, [animatedOffset, selectedCurrencies]);

  return (
    <ButtonWithIPadOSInteraction
      onPress={onCancelPress}
      containerStyle={styles.container}
      hitSlop={5}>
      <CancelButton pointerEvents="none" />
      <View style={styles.counterContainer}>
        <Animated.View style={[animatedStyle]}>
          <Text style={styles.counterText}>{''}</Text>
          {Object.keys(currencies).map((_, i) => (
            <Text key={i} style={styles.counterText}>
              {Number(i) + 1}
            </Text>
          ))}
        </Animated.View>
      </View>
    </ButtonWithIPadOSInteraction>
  );
};
