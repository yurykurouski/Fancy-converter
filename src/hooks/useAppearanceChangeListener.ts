import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { EColorSchemeBehavior } from 'types';

import { useSwitchColorScheme } from './store/UIStatus';

export const useAppearanceChangeListener = () => {
  const { behavior, colorScheme: currentColorScheme } = useSelector(
    selectColorSchemeState,
  );

  const switchColorScheme = useSwitchColorScheme();

  useEffect(() => {
    let timeoutID: NodeJS.Timeout;

    const listener = Appearance.addChangeListener(() => {
      timeoutID = setTimeout(() => {
        if (
          behavior === EColorSchemeBehavior.AUTO &&
          currentColorScheme !== Appearance.getColorScheme()
        ) {
          switchColorScheme(EColorSchemeBehavior.AUTO);
        }
      }, 500);
    });

    return () => {
      listener.remove();

      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    };
  }, [behavior, currentColorScheme, switchColorScheme]);
};
