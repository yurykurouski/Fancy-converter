import { useCallback, useState } from 'react';
import { Animated, Easing } from 'react-native';

import { UseNotificationAnimation } from './WithNotification.types';

const animatedPosition = new Animated.Value(0);

export const useNotificationAnimation: UseNotificationAnimation = () => {
  const [message, setMessage] = useState('');
  const startAnimation = useCallback((msg: string) => {
    setMessage(msg);

    Animated.sequence([
      Animated.delay(500),
      Animated.timing(animatedPosition, {
        toValue: 70,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.sin,
      }),
      Animated.timing(animatedPosition, {
        toValue: 65,
        duration: 120,
        useNativeDriver: false,
      }),
      Animated.delay(1300),
      Animated.timing(animatedPosition, {
        toValue: 70,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(animatedPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.exp,
      }),
    ]).start();
  }, []);

  return {
    animatedPosition,
    startAnimation,
    message,
  };
};
