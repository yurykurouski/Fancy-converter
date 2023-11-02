import { useCallback, useEffect, useMemo } from 'react';
import { BackHandler, Keyboard, Vibration } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import {
  interpolate,
  ReduceMotion,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { DRAWER_CONTENT_WIDTH } from 'components/Drawer/Drawer.constants';
import { DEFAULT_ANIMATION_DURATION } from 'constants/constants';
import { HOUR_IN_MS } from 'constants/constants';
import { useLoadCourses, useSetDrawerStatus } from 'hooks';
import { useSetEditMode } from 'hooks/store/UIStatus';
import { selectEditMode } from 'store/editMode/selectors';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { selectUIStatus } from 'store/ui/selectors';

import {
  TUseHandleBackPress,
  TUseOpenDrawerAnimations,
} from './CurrenciesMainContent.types';

export const useOpenDrawerAnimations: TUseOpenDrawerAnimations = () => {
  const setIsDrawerOpened = useSetDrawerStatus();

  const animatedPosition = useSharedValue(-DRAWER_CONTENT_WIDTH);

  const closeDrawer = useCallback(() => {
    animatedPosition.value = withTiming(-DRAWER_CONTENT_WIDTH, {
      duration: DEFAULT_ANIMATION_DURATION,
    });

    setIsDrawerOpened(false);
  }, [animatedPosition, setIsDrawerOpened]);

  const openDrawer = useCallback(() => {
    Vibration.vibrate(1);
    Keyboard.dismiss();

    animatedPosition.value = withTiming(0, {
      duration: DEFAULT_ANIMATION_DURATION,
    });

    setIsDrawerOpened(true);
  }, [animatedPosition, setIsDrawerOpened]);

  return {
    animatedPosition,
    closeDrawer,
    openDrawer,
  };
};

export const useAnimatedScreenStyle = (animatedPosition: SharedValue<number>) =>
  useAnimatedStyle(() => {
    const translateX = interpolate(
      animatedPosition.value,
      [-DRAWER_CONTENT_WIDTH, 0],
      [0, 10],
    );

    return {
      transform: [
        {
          translateX: translateX,
        },
      ],
    };
  });

export const useHandleBackPress: TUseHandleBackPress = closeDrawer => {
  const { isDrawerOpened } = useSelector(selectUIStatus);
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

        if (isDrawerOpened) {
          closeDrawer();
          return true;
        }
        return false;
      },
    );

    return () => backHandler.remove();
  }, [isDrawerOpened, closeDrawer, isInEditMode, setSelectedCurrInEditMode]);
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

export const useOpedDrawerGesture = (animatedPosition: SharedValue<number>) => {
  const setIsDrawerOpened = useSetDrawerStatus();

  return useMemo(
    () =>
      Gesture.Pan()
        .onUpdate(e => {
          if (e.translationX < 0 || e.translationX >= DRAWER_CONTENT_WIDTH)
            return;

          animatedPosition.value = -DRAWER_CONTENT_WIDTH + e.translationX;
        })
        .onEnd(e => {
          const { translationX, velocityX } = e;

          if (translationX > 100 || velocityX > 800) {
            animatedPosition.value = withTiming(0, {
              duration: DEFAULT_ANIMATION_DURATION,
            });

            runOnJS(setIsDrawerOpened)(true);
          } else {
            animatedPosition.value = withTiming(-DRAWER_CONTENT_WIDTH, {
              duration: DEFAULT_ANIMATION_DURATION,
              reduceMotion: ReduceMotion.System,
            });
          }
        }),
    [animatedPosition, setIsDrawerOpened],
  );
};
