import { PressableAndroidRippleConfig } from 'react-native';
import { THEME_COLORS } from 'assets/colors';
import { colorSchemeStore } from 'store/colorSchemeStore';
import { isIos } from 'utils';
import { useSnapshot } from 'valtio';

export const useAndroidRippleConfig = ():
  | PressableAndroidRippleConfig
  | undefined => {
  const { colorScheme } = useSnapshot(colorSchemeStore);

  if (!isIos) {
    return {
      borderless: true,
      foreground: true,
      color: THEME_COLORS[colorScheme!].ELEMENT_FADE_OR_BACKGROUND,
    };
  }
};
