import React, { useContext, useMemo } from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import { ThemeContext } from 'context/ThemeProvider/ThemeProvider';

import { useStyles } from './CurrenciesBottomSheet.styles';

export const BottomSheetBackground: React.FC<BottomSheetBackgroundProps> = ({
  style,
  animatedIndex,
}) => {
  const { themeColors } = useContext(ThemeContext);
  const styles = useStyles();

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animatedIndex.value,
      [1, 2],
      [themeColors.ELEMENT_FADE_OR_BACKGROUND_DARKER, 'rgba(0,0,0, 0)'],
    ),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 1,
  }));

  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle],
  );

  return (
    <>
      <Animated.View pointerEvents="none" style={[style, styles.background]} />
      <Animated.View pointerEvents="none" style={containerStyle} />
    </>
  );
};
