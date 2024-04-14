import { useCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { HOUR_IN_MS } from 'constants/index';
import { useLoadCourses } from 'hooks';
import { editModeActions, editModeStore } from 'store/valtio/editModeStore';
import { exchangeRatesStore } from 'store/valtio/exchangeRateStore';
import { useSnapshot } from 'valtio';

import {
  TUseHandleBackPress,
  TUseOpenDrawerAnimations,
} from './CurrenciesMainContent.types';

export const useOpenDrawerAnimations: TUseOpenDrawerAnimations = drawerRef => {
  const closeDrawer = useCallback(() => {
    drawerRef.current?.closeDrawer();
  }, [drawerRef]);

  const openDrawer = useCallback(() => {
    drawerRef.current?.openDrawer();
  }, [drawerRef]);

  return {
    closeDrawer,
    openDrawer,
  };
};

export const useHandleBackPress: TUseHandleBackPress = (
  closeDrawer,
  drawerRef,
) => {
  const { isInEditMode } = useSnapshot(editModeStore);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isInEditMode) {
          editModeActions.setEditMode(false);
          return true;
        }
        //@ts-expect-error
        if (drawerRef.current?.drawerShown) {
          closeDrawer();
          return true;
        }

        return false;
      },
    );

    return () => backHandler.remove();
  }, [closeDrawer, isInEditMode, drawerRef]);
};

export const useUpdateCourses = () => {
  const loadCourses = useLoadCourses();

  const { lastUpdated } = useSnapshot(exchangeRatesStore);

  useEffect(() => {
    if (lastUpdated) {
      const dateDiff = Date.now() - lastUpdated;

      if (dateDiff > HOUR_IN_MS) {
        loadCourses();
      }
    } else {
      loadCourses();
    }
  }, [lastUpdated, loadCourses]);
};
