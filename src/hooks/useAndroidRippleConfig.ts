import { PressableAndroidRippleConfig } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { isIos } from 'utils';

export const useAndroidRippleConfig = ():
  | PressableAndroidRippleConfig
  | undefined => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  if (!isIos) {
    return {
      borderless: true,
      foreground: true,
      color: THEME_COLORS[colorScheme!].ELEMENT_FADE_OR_BACKGROUND,
    };
  }
};
