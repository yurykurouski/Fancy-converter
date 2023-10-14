import React from 'react';
import { Appearance, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import cupDark from 'assets/icons/cup_dark.png';
import cupLight from 'assets/icons/cup_light.png';
import ghDarkIcon from 'assets/icons/github-dark.png';
import ghLightIcon from 'assets/icons/github-light.png';
import tgIcon from 'assets/icons/telegram-logo.png';
import { Switch } from 'components/common/Switch';
import {} from 'constants';
import {
  GITHUB_REPO_URL,
  PAYPAL_DONATION_URL,
  TG_CHANNEL_URL,
} from 'constants/constants';
import {
  useSetColorScheme,
  useSetColorSchemeBehavior,
} from 'hooks/store/ColorScheme';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { EColorSchemeBehavior } from 'types';

import { DrawerIcon } from '../DrawerIcon';
import { DrawerThemeSwitcher } from '../DrawerThemeSwitcher';

import { useButtonOnPress } from './DrawerContent.hooks';

import { useStyles } from './DrawerContent.styles';

const ENABLE_TG_BUTTON = false;

export const DrawerContent = React.memo(() => {
  const styles = useStyles();
  const { colorScheme, behavior } = useSelector(selectColorSchemeState);

  const setColorSchemeBehavior = useSetColorSchemeBehavior();
  const setColorScheme = useSetColorScheme();

  const onBehaviorChange = (val: boolean) => {
    const systemScheme = Appearance.getColorScheme();

    setColorSchemeBehavior(
      val ? EColorSchemeBehavior.AUTO : EColorSchemeBehavior.MANUAL,
    );

    setColorScheme(systemScheme);
  };

  const onSetColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    setColorSchemeBehavior(EColorSchemeBehavior.MANUAL);
  };

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
    <View style={styles.contentContainer}>
      <View style={styles.controlsContainer}>
        <Text style={styles.switchLabel}>
          {l['settings_auto-theme_switch']}
        </Text>
        <Switch
          value={behavior === EColorSchemeBehavior.AUTO}
          onValueChange={onBehaviorChange}
        />
      </View>

      <View style={styles.iconsContainer}>
        <DrawerIcon onPress={openGH} icon={ghIcon} />
        {ENABLE_TG_BUTTON ? (
          <DrawerIcon onPress={openTG} icon={tgIcon} />
        ) : (
          <DrawerIcon onPress={openPayPal} icon={cupIcon} />
        )}
        <DrawerThemeSwitcher
          colorScheme={colorScheme}
          setColorScheme={onSetColorScheme}
          schemeBehavior={behavior}
        />
      </View>
    </View>
  );
});
