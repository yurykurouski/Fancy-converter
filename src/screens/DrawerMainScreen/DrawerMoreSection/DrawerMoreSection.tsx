import React from 'react';
import { Linking, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { MailIcon } from 'assets/icons';
import { Switch } from 'components/common/Switch';
import { useSwitchAppearanceBehavior } from 'hooks/store/UIStatus';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { EColorSchemeBehavior } from 'types';

import { DrawerMenuItem } from '../DrawerMenuItem';

import { useStyles } from './DrawerMoreSection.styles';

export const DrawerMoreSection = ({ pageHeight }: { pageHeight: number }) => {
  const styles = useStyles(pageHeight);

  const { behavior } = useSelector(selectColorSchemeState);

  const switchAppearanceBehavior = useSwitchAppearanceBehavior();

  const writeEmail = () =>
    Linking.openURL(
      'mailto:zorkasoftware@gmail.com?subject=Fancy converter thoughts',
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{l['drawer_main_more-nav']}</Text>

      <DrawerMenuItem
        onPress={switchAppearanceBehavior}
        labelText={l['settings_auto-theme_switch']}>
        <Switch
          value={behavior === EColorSchemeBehavior.AUTO}
          onValueChange={switchAppearanceBehavior}
        />
      </DrawerMenuItem>
      <DrawerMenuItem onPress={writeEmail} labelText={l['drawer_share-text']}>
        <View style={styles.icon}>
          <MailIcon size={24} />
        </View>
      </DrawerMenuItem>
    </View>
  );
};
