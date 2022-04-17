import { Animated } from 'react-native';

export type StartNotification = (msg: string) => void;

export type UseNotificationAnimation = () => {
  animatedPosition: Animated.Value;
  startAnimation: StartNotification;
  message: string;
};
