import React from 'react';
import { ScrollView, Share, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CoffeeCupIcon, GithubIcon, RightArrowIcon } from 'assets/icons';
import { ShareIcon } from 'assets/icons/ShareIcon';
import { GITHUB_REPO_URL, PAYPAL_DONATION_URL } from 'constants/constants';
import { useSwitchColorScheme } from 'hooks/store/UIStatus';
import { DRAWER_STACK_ROUTES } from 'navigation/DrawerStack/DrawerStack.routes';
import { l } from 'resources/localization';
import { EColorSchemeBehavior } from 'types';
import { isIos } from 'utils';

import { DrawerIcon } from './DrawerIcon';
import { useButtonOnPress } from './DrawerMainScreen.hooks';
import { DrawerMenuItem } from './DrawerMenuItem';
import { DrawerThemeSwitcher } from './DrawerThemeSwitcher';

import { useStyles } from './DrawerMainScreen.styles';

const STORE_LINK = isIos ? 'App store link' : 'Play Store link';

export const DrawerMainScreen = React.memo(() => {
  const styles = useStyles();

  const switchColorScheme = useSwitchColorScheme();

  const { navigate } = useNavigation();

  const openGH = useButtonOnPress(
    GITHUB_REPO_URL,
    'alert_message.github_press.description',
  );

  const openPayPal = useButtonOnPress(
    PAYPAL_DONATION_URL,
    'alert_message.paypal_press.description',
  );

  const onShare = () => {
    Share.share({
      message: `Fancy Converter: ${STORE_LINK}`,
    });
  };

  const testNavigation = () => {
    navigate(DRAWER_STACK_ROUTES.MoreScreen);
  };

  const switchTheme = () => switchColorScheme(EColorSchemeBehavior.MANUAL);

  return (
    <View style={styles.contentContainer}>
      <ScrollView>
        <DrawerMenuItem
          onPress={testNavigation}
          labelText={l['drawer_main_more-nav']}>
          <View style={styles.mailIcon}>
            <RightArrowIcon size={26} />
          </View>
        </DrawerMenuItem>

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
          withRipple={false}
        />
      </View>
    </View>
  );
});
