import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import cupDark from 'assets/icons/cup_dark.png';
import cupLight from 'assets/icons/cup_light.png';
import ghDarkIcon from 'assets/icons/github-dark.png';
import ghLightIcon from 'assets/icons/github-light.png';
import tgIcon from 'assets/icons/telegram-logo.png';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { Switch } from 'components/common/Switch';
import {
  GITHUB_REPO_URL,
  PAYPAL_DONATION_URL,
  TG_CHANNEL_URL,
} from 'constants/constants';
import { useSwitchAppearanceBehavior } from 'hooks/store/UIStatus';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/ui/selectors';
import { EColorSchemeBehavior } from 'types';

import { DrawerIcon } from '../DrawerIcon';
import { DrawerThemeSwitcher } from '../DrawerThemeSwitcher';

import { useButtonOnPress } from './DrawerContent.hooks';

import { useStyles } from './DrawerContent.styles';

const ENABLE_TG_BUTTON = false;

export const DrawerContent = React.memo(() => {
  const styles = useStyles();
  const { colorScheme, behavior } = useSelector(selectColorSchemeState);

  const switchAppearanceBehavior = useSwitchAppearanceBehavior();

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
      <ScrollView>
        <View style={styles.controlsContainer}>
          <ButtonWithIPadOSInteraction onPress={switchAppearanceBehavior}>
            <Text style={styles.switchLabel}>
              {l['settings_auto-theme_switch']}
            </Text>
          </ButtonWithIPadOSInteraction>
          <Switch
            value={behavior === EColorSchemeBehavior.AUTO}
            onValueChange={switchAppearanceBehavior}
          />
        </View>

        <View style={styles.morePlaceholder}>
          <Text style={[styles.moreText, styles.moreFirstRow]}>
            {l.drawer_placeholder_title}
          </Text>
          <Text style={[styles.moreText, styles.moreSecondRow]}>
            {l.drawer_placeholder_text}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.iconsContainer}>
        <DrawerIcon onPress={openGH} icon={ghIcon} />
        {ENABLE_TG_BUTTON ? (
          <DrawerIcon onPress={openTG} icon={tgIcon} />
        ) : (
          <DrawerIcon onPress={openPayPal} icon={cupIcon} />
        )}
        <DrawerThemeSwitcher />
      </View>
    </View>
  );
});
