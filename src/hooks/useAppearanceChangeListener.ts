import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColorSchemeState } from 'store/ui/selectors';
import { EColorSchemeBehavior } from 'types';

import { useSwitchColorScheme } from './store/UIStatus';

export const useAppearanceChangeListener = () => {
  const { behavior, colorScheme: currentColorScheme } = useSelector(
    selectColorSchemeState,
  );

  const switchColorScheme = useSwitchColorScheme();

  useEffect(() => {
    const listener = Appearance.addChangeListener(prop => {
      if (
        behavior === EColorSchemeBehavior.AUTO &&
        currentColorScheme !== prop.colorScheme
      ) {
        switchColorScheme(EColorSchemeBehavior.AUTO);
      }
    });

    return () => listener.remove();
  }, [behavior, currentColorScheme, switchColorScheme]);
};
