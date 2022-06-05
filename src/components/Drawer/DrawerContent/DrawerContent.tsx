import React, { useCallback, useContext } from 'react';
import { Linking, View } from 'react-native';
import ghDarkIcon from 'assets/icons/github-dark.png';
import ghLightIcon from 'assets/icons/github-light.png';
import tgIcon from 'assets/icons/telegram-logo.png';
import { ThemeContext } from 'context';

import { DrawerIcon } from '../DrawerIcon';
import { DrawerThemeSwitcher } from '../DrawerThemeSwitcher';

import { useAlertMessage } from './DrawerContent.hooks';

import { styles } from './DrawerContent.styles';

export const DrawerContent = React.memo(() => {
  const { colorScheme, setColorScheme } = useContext(ThemeContext);

  const ghIcon = colorScheme === 'dark' ? ghLightIcon : ghDarkIcon;

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
      <DrawerThemeSwitcher
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
      />
    </View>
  );
});
