import React from 'react';
import { View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { GithubIcon } from 'assets/icons';
import { BLUR_AMOUNT, BLUR_RADIUS, GITHUB_REPO_URL } from 'constants/index';
import { useSwitchColorScheme } from 'hooks/store/UIStatus';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { EColorSchemeBehavior } from 'types';

import { DrawerIcon } from '../DrawerIcon';
import { useButtonOnPress } from '../DrawerMainScreen.hooks';
import { DrawerThemeSwitcher } from '../DrawerThemeSwitcher';

import { useStyles } from './DrawerSwitcher.styles';

export const DrawerSwitcher = () => {
  const styles = useStyles();

  const { colorScheme } = useSelector(selectColorSchemeState);

  const switchColorScheme = useSwitchColorScheme();

  const openGH = useButtonOnPress(
    GITHUB_REPO_URL,
    'alert_message.github_press.description',
  );

  // const openPayPal = useButtonOnPress(
  //   DONATION_URL,
  //   'alert_message.paypal_press.description',
  // );

  const switchTheme = () => switchColorScheme(EColorSchemeBehavior.MANUAL);

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
          {/* <DrawerIcon Icon={CoffeeCupIcon} size={30} onPress={openPayPal} /> */}
          <DrawerIcon
            Icon={DrawerThemeSwitcher}
            size={30}
            onPress={switchTheme}
            withRipple={false}
          />
        </View>
      </BlurView>
    </View>
  );
};
