import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { Counter } from 'components/Header/components/Counter';
import { RemoveSweep } from 'components/Header/components/RemoveSweep';
import { BLUR_AMOUNT, BLUR_RADIUS } from 'constants/index';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { styles } from './ControlsMenu.styles';

export const ControlsMenu = React.memo(() => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  return (
    <BlurView
      style={styles.controlsContainer}
      overlayColor="transparent"
      blurAmount={BLUR_AMOUNT}
      blurRadius={BLUR_RADIUS}
      reducedTransparencyFallbackColor={
        THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
      }
      blurType={colorScheme!}
      pointerEvents="box-none">
      <Counter />
      <RemoveSweep />
    </BlurView>
  );
});
