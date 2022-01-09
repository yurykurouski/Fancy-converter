import { VIBRATION_DURATION } from 'constants/constants';
import { useCallback, useState } from 'react';
import { Animated, Vibration } from 'react-native';
import { getScreenWidth } from 'utils';

const screenWidth = getScreenWidth();
const animatedPosition = new Animated.Value(-(screenWidth * 0.6));

type UseOpenDrawerAnimations = () => {
  isDrawerOpened: boolean;
  drawerAnimation: () => void;
  animatedPosition: Animated.Value;
};

export const useOpenDrawerAnimations: UseOpenDrawerAnimations = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const drawerAnimation = useCallback(() => {
    if (!isDrawerOpened) {
      Vibration.vibrate(VIBRATION_DURATION);

      Animated.timing(animatedPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();

      setIsDrawerOpened(true);
    } else {
      Animated.timing(animatedPosition, {
        toValue: -(screenWidth * 0.6),
        duration: 200,
        useNativeDriver: false,
      }).start();

      setIsDrawerOpened(false);
    }
  }, [isDrawerOpened]);

  return {
    isDrawerOpened,
    drawerAnimation,
    animatedPosition,
  };
};
