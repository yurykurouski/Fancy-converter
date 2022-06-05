import React, { createContext, useState } from 'react';
import { Appearance } from 'react-native';
import { getCurrentColorTheme, getCurrentThemeColors } from 'utils';

import { useSetColorScheme } from './ThemeProvider.hooks';
import { ThemeContext as Props } from './ThemeProvider.types';

export const ThemeContext = createContext<Props | null>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Omit<Props, 'setColorScheme'>>(() => ({
    colorScheme: getCurrentColorTheme(),
    themeColors: getCurrentThemeColors(),
  }));

  const setColorScheme = useSetColorScheme(setTheme);

  Appearance.addChangeListener(({ colorScheme }) =>
    setColorScheme(colorScheme),
  );

  return (
    <ThemeContext.Provider value={{ ...theme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
