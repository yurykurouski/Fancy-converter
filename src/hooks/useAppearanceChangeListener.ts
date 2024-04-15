import { useCallback, useEffect } from 'react';
import { Appearance } from 'react-native';
import { colorSchemeActions, colorSchemeStore } from 'store/colorSchemeStore';
import { EColorSchemeBehavior } from 'types';
import { useSnapshot } from 'valtio';

export const useAppearanceChangeListener = () => {
  const { behavior, colorScheme: currentColorScheme } =
    useSnapshot(colorSchemeStore);

  const switchAppearance = useCallback(() => {
    if (
      behavior === EColorSchemeBehavior.AUTO &&
      currentColorScheme !== Appearance.getColorScheme()
    ) {
      colorSchemeActions.switchColorScheme(EColorSchemeBehavior.AUTO);
    }
  }, [behavior, currentColorScheme]);

  useEffect(() => {
    let timeoutID: number;

    switchAppearance();

    const listener = Appearance.addChangeListener(() => {
      timeoutID = setTimeout(() => {
        switchAppearance();
      }, 500);
    });

    return () => {
      listener.remove();

      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    };
  }, [behavior, currentColorScheme, switchAppearance]);
};
