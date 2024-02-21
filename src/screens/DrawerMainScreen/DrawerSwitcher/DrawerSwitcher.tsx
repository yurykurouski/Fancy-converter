import React from 'react';
import { View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { GithubIcon } from 'assets/icons';
import { BLUR_AMOUNT, BLUR_RADIUS, GITHUB_REPO_URL } from 'constants/index';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { DrawerIcon } from '../DrawerIcon';
import { useButtonOnPress } from '../DrawerMainScreen.hooks';
import { DrawerThemeSwitcher } from '../DrawerThemeSwitcher';

import { useStyles } from './DrawerSwitcher.styles';

export const DrawerSwitcher = React.memo(() => {
  const styles = useStyles();

  const { colorScheme } = useSelector(selectColorSchemeState);

  const openGH = useButtonOnPress(
    GITHUB_REPO_URL,
    'alert_message.github_press.description',
  );

  return (
    <View style={styles.iconsContainer}>
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
        <View style={styles.wrapper}>
          <DrawerIcon Icon={GithubIcon} size={30} onPress={openGH} />
          <DrawerThemeSwitcher />
        </View>
      </BlurView>
    </View>
  );
});
