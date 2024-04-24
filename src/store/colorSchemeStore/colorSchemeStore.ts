import { ColorSchemeName, InteractionManager } from 'react-native';
import { rehydrateState } from 'store/helpers';
import { PERSISTED_STORES } from 'store/store.config';
import { EColorSchemeBehavior } from 'types';
import { getCurrentColorTheme } from 'utils';
import { proxy } from 'valtio';

enum EColorSchemeKeys {
  COLOR_SCHEME = 'colorScheme',
  BEHAVIOR = 'behavior',
}

type TColorSchemeStore = {
  [EColorSchemeKeys.COLOR_SCHEME]: ColorSchemeName;
  [EColorSchemeKeys.BEHAVIOR]: EColorSchemeBehavior;
};

const whiteList = [EColorSchemeKeys.COLOR_SCHEME, EColorSchemeKeys.BEHAVIOR];

const initialState = {
  [EColorSchemeKeys.COLOR_SCHEME]: getCurrentColorTheme(),
  [EColorSchemeKeys.BEHAVIOR]: EColorSchemeBehavior.AUTO,
};

export const colorSchemeStore = proxy<TColorSchemeStore>(initialState);

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

  rehydrateState: async function () {
    await rehydrateState(
      colorSchemeStore,
      PERSISTED_STORES.COLOR_SCHEME,
      whiteList,
    );
  },
};

export const colorSchemeStoreConfig = {
  store: colorSchemeStore,
  actions: colorSchemeActions,
  whiteList,
};
