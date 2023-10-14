import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { EColorSchemeBehavior } from 'types';

import { useSetColorScheme } from './store/ColorScheme';

export const useAppearanceChangeListener = () => {
  const { behavior } = useSelector(selectColorSchemeState);

  const setColorScheme = useSetColorScheme();

  useEffect(() => {
    if (behavior === EColorSchemeBehavior.AUTO) {
      setColorScheme(Appearance.getColorScheme());
    }

    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (behavior === EColorSchemeBehavior.AUTO) {
        setColorScheme(colorScheme);
      }
    });

    return () => listener.remove();
  }, [behavior, setColorScheme]);
};
