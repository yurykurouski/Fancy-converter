import { useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { useDispatch } from 'react-redux';
import { useThemeSwitcherAnimations } from 'components/Drawer/DrawerThemeSwitcher/DrawerThemeSwitcher.hooks';
import { ColorSchemeSlice } from 'store/colorScheme/slices/ColorSchemeSlice';
import { getFromStorage, StorageKeys } from 'utils';

export const useSetCustomColorSchemeFromStorage = () => {
  const dispatch = useDispatch();

  const { animateThemeSwitcher } = useThemeSwitcherAnimations();

  const setColorScheme = (theme: ColorSchemeName) =>
    dispatch(ColorSchemeSlice.actions.setColorScheme(theme));

  useEffect(() => {
    getFromStorage(StorageKeys.COLOR_SCHEME).then(
      (colorScheme: ColorSchemeName) => {
        if (colorScheme) {
          setColorScheme(colorScheme);
          animateThemeSwitcher(colorScheme === 'dark' ? 'light' : 'dark');
        }
      },
    );

    //TODO: separate logic
    Appearance.addChangeListener(({ colorScheme }) =>
      setColorScheme(colorScheme),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
