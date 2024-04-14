import React from 'react';
import { Linking, Text, View } from 'react-native';
import { MailIcon } from 'assets/icons';
import { Switch } from 'components/common/Switch';
import { l } from 'resources/localization';
import {
  colorSchemeActions,
  colorSchemeStore,
} from 'store/valtio/colorSchemeStore';
import { EColorSchemeBehavior } from 'types';
import { useSnapshot } from 'valtio';

import { DrawerMenuItem } from '../DrawerMenuItem';

import { useStyles } from './DrawerMoreSection.styles';

export const DrawerMoreSection = ({ pageHeight }: { pageHeight: number }) => {
  const styles = useStyles(pageHeight);

  const { behavior } = useSnapshot(colorSchemeStore);

  const writeEmail = () =>
    Linking.openURL(
      'mailto:zorkasoftware@gmail.com?subject=Fancy converter thoughts',
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{l['drawer_main_more-nav']}</Text>

      <DrawerMenuItem
        onPress={colorSchemeActions.switchAppearanceBehavior}
        labelText={l['settings_auto-theme_switch']}>
        <Switch
          value={behavior === EColorSchemeBehavior.AUTO}
          onValueChange={colorSchemeActions.switchAppearanceBehavior}
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
