import { Animated } from 'react-native';

export type UseOpenDrawerAnimations = () => {
  isDrawerOpened: boolean;
  drawerAnimation: () => void;
  animatedPosition: Animated.Value;
};

export type UseHandleBackPress = (
  isDrawerOpened: boolean,
  drawerAnimation: () => void,
) => void;
