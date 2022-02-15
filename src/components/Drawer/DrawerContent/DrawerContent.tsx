import React, { useCallback } from 'react';
import { Linking, View } from 'react-native';
import ghDarkIcon from 'assets/icons/github-dark.png';
import ghLightIcon from 'assets/icons/github-light.png';
import tgIcon from 'assets/icons/telegram-logo.png';
import { getCurrentColorTheme } from 'utils';

import { DrawerIcon } from '../DrawerIcon';

import { useAlertMessage } from './DrawerContent.hooks';

import { styles } from './DrawerContent.styles';

const theme = getCurrentColorTheme();

const ghIcon = theme === 'dark' ? ghLightIcon : ghDarkIcon;

export const DrawerContent = React.memo(() => {
  const withAlert = useAlertMessage();

  const openGH = useCallback(
    () =>
      withAlert(() =>
        Linking.openURL('https://github.com/yurykurouski/Fancy-converter'),
      ),
    [withAlert],
  );

  const openTG = useCallback(
    () => withAlert(() => Linking.openURL('https://t.me/fancyconverter')),
    [withAlert],
  );

  return (
    <View style={styles.iconsContainer}>
      <DrawerIcon onPress={openGH} icon={ghIcon} />
      <DrawerIcon onPress={openTG} icon={tgIcon} />
    </View>
  );
});
