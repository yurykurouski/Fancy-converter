import React, { createContext, useEffect, useRef, useState } from 'react';
import { Appearance, AppState, ColorSchemeName } from 'react-native';
import { useThemeSwitcherAnimations } from 'components/Drawer/DrawerThemeSwitcher/DrawerThemeSwitcher.hooks';
import {
  getCurrentColorTheme,
  getCurrentThemeColors,
  getFromStorage,
  setToStorage,
  StorageKeys,
} from 'utils';

import { useSetColorScheme } from './ThemeProvider.hooks';
import { ThemeContext as Props } from './ThemeProvider.types';

export const ThemeContext = createContext<Props | null>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Omit<Props, 'setColorScheme'>>(() => ({
    colorScheme: getCurrentColorTheme(),
    themeColors: getCurrentThemeColors(),
  }));

  const appState = useRef(AppState.currentState);

  const setColorScheme = useSetColorScheme(setTheme);
  const { animateThemeSwitcher } = useThemeSwitcherAnimations();

  useEffect(() => {
    getFromStorage(StorageKeys.COLOR_SCHEME).then(colorScheme => {
      const parsed = JSON.parse(colorScheme) as ColorSchemeName;

      if (parsed) {
        setColorScheme(parsed);
        animateThemeSwitcher(parsed === 'dark' ? 'light' : 'dark');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current === 'active' && nextAppState === 'background') {
        setToStorage(StorageKeys.COLOR_SCHEME, theme.colorScheme);
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [theme.colorScheme]);

  Appearance.addChangeListener(({ colorScheme }) =>
    setColorScheme(colorScheme),
  );

  return (
    <ThemeContext.Provider value={{ ...theme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
