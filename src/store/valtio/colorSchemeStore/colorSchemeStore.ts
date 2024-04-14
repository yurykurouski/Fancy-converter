import { InteractionManager } from 'react-native';
import { EColorSchemeBehavior } from 'types';
import { getCurrentColorTheme } from 'utils';
import { proxy } from 'valtio';

const initialState = {
  colorScheme: getCurrentColorTheme(),
  behavior: EColorSchemeBehavior.AUTO,
};

export const colorSchemeStore = proxy(initialState);

export const colorSchemeActions = {
  switchColorScheme: (behavior: EColorSchemeBehavior) => {
    InteractionManager.runAfterInteractions(() => {
      colorSchemeStore.colorScheme =
        colorSchemeStore.colorScheme === 'light' ? 'dark' : 'light';
      colorSchemeStore.behavior = behavior;
    });
  },
  switchAppearanceBehavior: () => {
    InteractionManager.runAfterInteractions(() => {
      colorSchemeStore.behavior =
        colorSchemeStore.behavior === EColorSchemeBehavior.AUTO
          ? EColorSchemeBehavior.MANUAL
          : EColorSchemeBehavior.AUTO;

      if (colorSchemeStore.behavior === EColorSchemeBehavior.AUTO) {
        colorSchemeStore.colorScheme = getCurrentColorTheme();
      }
    });
  },
};
