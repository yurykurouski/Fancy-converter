import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { isIos } from 'utils';

import { useStyles } from './Header.styles';

type Props = {
  onLongPress: () => void;
  isHeaderBlurred: boolean;
};

export const Header = React.memo<Props>(({ onLongPress, isHeaderBlurred }) => {
  const styles = useStyles(isHeaderBlurred);

  const { colorScheme } = useSelector(selectColorSchemeState);

  //TODO: try to find solution for android
  return isIos ? (
    <BlurView
      style={styles.blurView}
      overlayColor={THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY}
      reducedTransparencyFallbackColor={
        THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
      }
      blurType={colorScheme!}
      pointerEvents="box-none">
      <Pressable onLongPress={onLongPress} style={styles.container}>
        <Text style={styles.header}>Fancy converter</Text>
      </Pressable>
    </BlurView>
  ) : (
    <View style={styles.blurView} pointerEvents="box-none">
      <Pressable onLongPress={onLongPress} style={styles.container}>
        <Text style={styles.header}>Fancy converter</Text>
      </Pressable>
    </View>
  );
});
