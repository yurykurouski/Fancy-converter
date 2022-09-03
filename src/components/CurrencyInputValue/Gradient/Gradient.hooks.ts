import { useContext } from 'react';
import { ColorsDark, ColorsLight } from 'assets/colors';
import { ThemeContext } from 'context';

export const useGradientAccentColor = (isFocused: boolean) => {
  const { colorScheme } = useContext(ThemeContext);

  const accentColorsDark = isFocused
    ? ColorsDark.ACCENT_COLOR_LIGHTER
    : ColorsLight.ACCENT_COLOR_LIGHTER;

  const accentColorsLight = isFocused
    ? ColorsLight.ACCENT_COLOR_LIGHTER
    : ColorsDark.ACCENT_COLOR_LIGHTER;

  return colorScheme === 'dark' ? accentColorsDark : accentColorsLight;
};
