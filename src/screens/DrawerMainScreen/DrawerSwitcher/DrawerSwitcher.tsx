import React from 'react';
import { View } from 'react-native';
import { GithubIcon } from 'assets/icons';
import { GITHUB_REPO_URL } from 'constants/index';

import { DrawerIcon } from '../DrawerIcon';
import { useButtonOnPress } from '../DrawerMainScreen.hooks';
import { DrawerThemeSwitcher } from '../DrawerThemeSwitcher';

import { useStyles } from './DrawerSwitcher.styles';

export const DrawerSwitcher = React.memo(() => {
  const styles = useStyles();

  const openGH = useButtonOnPress(
    GITHUB_REPO_URL,
    'alert_message.github_press.description',
  );

  return (
    <View style={styles.iconsContainer}>
      <DrawerIcon Icon={GithubIcon} size={30} onPress={openGH} />
      <DrawerThemeSwitcher />
    </View>
  );
});
