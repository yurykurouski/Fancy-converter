import { useCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useSelector } from 'react-redux';
import { HOUR_IN_MS } from 'constants/index';
import { useLoadCourses } from 'hooks';
import { useSetEditMode } from 'hooks/store/UIStatus';
import { selectEditMode } from 'store/editMode/selectors';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';

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
  const { isInEditMode } = useSelector(selectEditMode);

  const setSelectedCurrInEditMode = useSetEditMode();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isInEditMode) {
          setSelectedCurrInEditMode(false);
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
  }, [closeDrawer, isInEditMode, setSelectedCurrInEditMode, drawerRef]);
};

export const useUpdateCourses = () => {
  const loadCourses = useLoadCourses();

  const { lastUpdated } = useSelector(selectExchangeCourses);

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
