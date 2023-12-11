import React from 'react';
import { Linking, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { MailIcon, RightArrowIcon } from 'assets/icons';
import { DrawerScreen, Separator } from 'components';
import { Switch } from 'components/common/Switch';
import { useSwitchAppearanceBehavior } from 'hooks/store/UIStatus';
import { DRAWER_STACK_ROUTES } from 'navigation/DrawerStack/DrawerStack.routes';
import { l } from 'resources/localization';
import { DrawerMenuItem } from 'screens/DrawerMainScreen/DrawerMenuItem';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { EColorSchemeBehavior } from 'types';

import { useStyles } from './DrawerMoreScreen.styles';

export const DrawerMoreScreen = () => {
  const styles = useStyles();

  const { behavior } = useSelector(selectColorSchemeState);

  const switchAppearanceBehavior = useSwitchAppearanceBehavior();

  const { navigate } = useNavigation();

  const writeEmail = () =>
    Linking.openURL(
      'mailto:zorkasoftware@gmail.com?subject=Fancy converter thoughts',
    );

  const handleCreditsNavigation = () =>
    navigate(DRAWER_STACK_ROUTES.CreditsScreen);

  return (
    <DrawerScreen>
      <View style={styles.container}>
        <DrawerMenuItem
          onPress={switchAppearanceBehavior}
          labelText={l['settings_auto-theme_switch']}>
          <Switch
            value={behavior === EColorSchemeBehavior.AUTO}
            onValueChange={switchAppearanceBehavior}
          />
        </DrawerMenuItem>
        <Separator />
        <DrawerMenuItem
          onPress={handleCreditsNavigation}
          labelText={l['drawer_credits-nav']}>
          <View style={styles.icon}>
            <RightArrowIcon size={24} />
          </View>
        </DrawerMenuItem>
        <DrawerMenuItem onPress={writeEmail} labelText={l['drawer_share-text']}>
          <View style={styles.icon}>
            <MailIcon size={24} />
          </View>
        </DrawerMenuItem>
      </View>
    </DrawerScreen>
  );
};
