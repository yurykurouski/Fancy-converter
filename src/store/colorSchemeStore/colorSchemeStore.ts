import { InteractionManager } from 'react-native';
import { EColorSchemeBehavior } from 'types';
import { proxy } from 'valtio';

enum EColorSchemeKeys {
  BEHAVIOR = 'behavior',
}

type TColorSchemeStore = {
  [EColorSchemeKeys.BEHAVIOR]: EColorSchemeBehavior;
};

const whiteList = [EColorSchemeKeys.BEHAVIOR];

const initialState = {
  [EColorSchemeKeys.BEHAVIOR]: EColorSchemeBehavior.AUTO,
};

export const colorSchemeStore = proxy<TColorSchemeStore>(initialState);

export const colorSchemeActions = {
  switchAppearanceBehavior: () => {
    InteractionManager.runAfterInteractions(() => {
      colorSchemeStore.behavior =
        colorSchemeStore.behavior === EColorSchemeBehavior.AUTO
          ? EColorSchemeBehavior.MANUAL
          : EColorSchemeBehavior.AUTO;
    });
  },
  setAppearanceBehavior: (behavior: EColorSchemeBehavior) => {
    colorSchemeStore.behavior = behavior;
  },
};

export const colorSchemeStoreConfig = {
  store: colorSchemeStore,
  whiteList,
};
