import React, { useEffect } from 'react';
import { Appearance, Linking, Text, useColorScheme, View } from 'react-native';
import { MailIcon } from 'assets/icons';
import { l } from 'resources/localization';

import { DrawerMenuItem } from '../DrawerMenuItem';

import { useStyles } from './DrawerMoreSection.styles';

export const DrawerMoreSection = ({ pageHeight }: { pageHeight: number }) => {
  const styles = useStyles(pageHeight);

  // const { behavior } = useProxy(colorSchemeStore);
  const colorScheme = useColorScheme();

  useEffect(() => {
    Appearance.addChangeListener(() => {
      console.log('cahnge');
    });
  }, []);

  const writeEmail = () =>
    Linking.openURL(
      'mailto:zorkasoftware@gmail.com?subject=Fancy converter thoughts',
    );

  // const onSwitchPress = () => {
  //   colorSchemeActions.switchAppearanceBehavior();

  //   setThemePreference(colorScheme === 'dark' ? 'light' : 'dark', {
  //     persistTheme: false,
  //     //TODO: handle restarting
  //     // restartActivity: true,
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{l['drawer_main_more-nav']}</Text>

      {/* <DrawerMenuItem
        onPress={onSwitchPress}
        labelText={l['settings_auto-theme_switch']}>
        <Switch
          value={behavior === EColorSchemeBehavior.AUTO}
          onValueChange={onSwitchPress}
        />
      </DrawerMenuItem> */}
      <DrawerMenuItem onPress={writeEmail} labelText={l['drawer_share-text']}>
        <View style={styles.icon}>
          <MailIcon size={24} />
        </View>
      </DrawerMenuItem>
    </View>
  );
};
