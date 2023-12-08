import React from 'react';
import { Linking, ScrollView, Share, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CoffeeCupIcon, GithubIcon, MailIcon } from 'assets/icons';
import { ShareIcon } from 'assets/icons/ShareIcon';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { Separator } from 'components/common/Separator';
import { Switch } from 'components/common/Switch';
import { GITHUB_REPO_URL, PAYPAL_DONATION_URL } from 'constants/constants';
import {
  useSwitchAppearanceBehavior,
  useSwitchColorScheme,
} from 'hooks/store/UIStatus';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { EColorSchemeBehavior } from 'types';
import { isIos } from 'utils';

import { useButtonOnPress } from './DrawerContent.hooks';
import { DrawerIcon } from './DrawerIcon';
import { DrawerThemeSwitcher } from './DrawerThemeSwitcher';

import { useStyles } from './DrawerContent.styles';

const STORE_LINK = isIos ? 'App store link' : 'Play Store link';

export const DrawerContent = React.memo(() => {
  const styles = useStyles();
  const { behavior } = useSelector(selectColorSchemeState);

  const switchAppearanceBehavior = useSwitchAppearanceBehavior();
  const switchColorScheme = useSwitchColorScheme();

  const openGH = useButtonOnPress(
    GITHUB_REPO_URL,
    'alert_message.github_press.description',
  );

  const openPayPal = useButtonOnPress(
    PAYPAL_DONATION_URL,
    'alert_message.paypal_press.description',
  );

  const writeEmail = () =>
    Linking.openURL(
      'mailto:zorkasoftware@gmail.com?subject=Fancy converter feedback',
    );

  const onShare = () => {
    Share.share({
      message: `Fancy Converter: ${STORE_LINK}`,
    });
  };

  const switchTheme = () => switchColorScheme(EColorSchemeBehavior.MANUAL);

  return (
    <View style={styles.contentContainer}>
      <ScrollView>
        <View style={styles.controls}>
          <View style={styles.controlContainer}>
            <ButtonWithIPadOSInteraction
              onPress={switchAppearanceBehavior}
              containerStyle={styles.switchLabelContainer}>
              <Text
                style={styles.switchLabel}
                adjustsFontSizeToFit
                numberOfLines={2}>
                {l['settings_auto-theme_switch']}
              </Text>
            </ButtonWithIPadOSInteraction>
            <Switch
              value={behavior === EColorSchemeBehavior.AUTO}
              onValueChange={switchAppearanceBehavior}
            />
          </View>
          <Separator />
          <View style={styles.controlContainer}>
            <ButtonWithIPadOSInteraction
              onPress={writeEmail}
              containerStyle={styles.switchLabelContainer}>
              <Text
                style={styles.switchLabel}
                adjustsFontSizeToFit
                numberOfLines={2}>
                {l['drawer_share-text']}
              </Text>
            </ButtonWithIPadOSInteraction>
            <View style={styles.mailIcon}>
              <MailIcon size={26} />
            </View>
          </View>
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
        <DrawerIcon Icon={ShareIcon} size={30} onPress={onShare} />
        <DrawerIcon Icon={GithubIcon} size={30} onPress={openGH} />
        <DrawerIcon Icon={CoffeeCupIcon} size={30} onPress={openPayPal} />
        <DrawerIcon
          Icon={DrawerThemeSwitcher}
          size={30}
          onPress={switchTheme}
        />
      </View>
    </View>
  );
});
