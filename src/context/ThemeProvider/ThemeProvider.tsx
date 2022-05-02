import React, { createContext, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { Theme, THEME_COLORS } from 'assets/colors';
import { getCurrentColorTheme, getCurrentThemeColors } from 'utils';

type ThemeContext = {
  colorScheme: ColorSchemeName;
  themeColors: Theme;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeColors, setThemeColors] = useState(() => ({
    colorScheme: getCurrentColorTheme(),
    themeColors: getCurrentThemeColors(),
  }));

  Appearance.addChangeListener(({ colorScheme }) =>
    setThemeColors({
      colorScheme,
      themeColors: THEME_COLORS[colorScheme],
    }),
  );

  return (
    <ThemeContext.Provider value={themeColors}>
      {children}
    </ThemeContext.Provider>
  );
};
