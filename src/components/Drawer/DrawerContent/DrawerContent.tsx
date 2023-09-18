import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import cupDark from 'assets/icons/cup_dark.png';
import cupLight from 'assets/icons/cup_light.png';
import ghDarkIcon from 'assets/icons/github-dark.png';
import ghLightIcon from 'assets/icons/github-light.png';
import tgIcon from 'assets/icons/telegram-logo.png';
import {} from 'constants';
import {
  GITHUB_REPO_URL,
  PAYPAL_DONATION_URL,
  TG_CHANNEL_URL,
} from 'constants/constants';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { ColorSchemeSlice } from 'store/colorScheme/slices/ColorSchemeSlice';

import { DrawerIcon } from '../DrawerIcon';
import { DrawerThemeSwitcher } from '../DrawerThemeSwitcher';

import { useButtonOnPress } from './DrawerContent.hooks';

import { styles } from './DrawerContent.styles';

const ENABLE_TG_BUTTON = false;

export const DrawerContent = React.memo(() => {
  const { colorScheme } = useSelector(selectColorSchemeState);
  const dispatch = useDispatch();

  const setColorScheme = () =>
    dispatch(
      ColorSchemeSlice.actions.setColorScheme(
        colorScheme === 'dark' ? 'light' : 'dark',
      ),
    );

  const ghIcon = colorScheme === 'dark' ? ghLightIcon : ghDarkIcon;
  const cupIcon = colorScheme === 'dark' ? cupDark : cupLight;

  const openGH = useButtonOnPress(
    GITHUB_REPO_URL,
    'alert_message.github_press.description',
  );

  const openTG = useButtonOnPress(TG_CHANNEL_URL);

  const openPayPal = useButtonOnPress(
    PAYPAL_DONATION_URL,
    'alert_message.paypal_press.description',
  );

  return (
    <View style={styles.iconsContainer}>
      <DrawerIcon onPress={openGH} icon={ghIcon} />
      {ENABLE_TG_BUTTON ? (
        <DrawerIcon onPress={openTG} icon={tgIcon} />
      ) : (
        <DrawerIcon onPress={openPayPal} icon={cupIcon} />
      )}
      <DrawerThemeSwitcher
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
      />
    </View>
  );
});
