import React from 'react';
import { Pressable, Text } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { BLUR_AMOUNT, BLUR_RADIUS } from 'constants/constants';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { useStyles } from './Header.styles';

type Props = {
  onLongPress: () => void;
  isHeaderBlurred: boolean;
};

export const Header = React.memo<Props>(({ onLongPress, isHeaderBlurred }) => {
  const styles = useStyles(isHeaderBlurred);

  const { colorScheme } = useSelector(selectColorSchemeState);

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
        <Text style={styles.header}>Fancy converter</Text>
      </Pressable>
    </BlurView>
  );
});
