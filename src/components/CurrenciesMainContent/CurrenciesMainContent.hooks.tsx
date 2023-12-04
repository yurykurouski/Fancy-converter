import { useCallback, useEffect } from 'react';
import { BackHandler } from 'react-native';
import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { DRAWER_CONTENT_WIDTH } from 'components/DrawerContent/Drawer.constants';
import { HOUR_IN_MS } from 'constants/constants';
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

export const useHorizontalParallax = (animatedPosition: SharedValue<number>) =>
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

// export const useOpedDrawerGesture = (animatedPosition: SharedValue<number>) => {
//   const setIsDrawerOpened = useSetDrawerStatus();

//   return useMemo(
//     () =>
//       Gesture.Pan()
//         .onUpdate(e => {
//           if (e.translationX < 0 || e.translationX >= DRAWER_CONTENT_WIDTH)
//             return;

//           animatedPosition.value = -DRAWER_CONTENT_WIDTH + e.translationX;
//         })
//         .onEnd(e => {
//           const { translationX, velocityX } = e;

//           if (translationX > 100 || velocityX > 800) {
//             animatedPosition.value = withTiming(0, {
//               duration: DEFAULT_ANIMATION_DURATION,
//             });

//             runOnJS(setIsDrawerOpened)(true);
//           } else {
//             animatedPosition.value = withTiming(-DRAWER_CONTENT_WIDTH, {
//               duration: DEFAULT_ANIMATION_DURATION,
//               reduceMotion: ReduceMotion.System,
//             });
//           }
//         }),
//     [animatedPosition, setIsDrawerOpened],
//   );
// };
