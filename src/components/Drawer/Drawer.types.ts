import { Animated } from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

export type Props = {
  animatedPosition: Animated.Value;
  drawerAnimation: () => void;
  isDrawerOpened: boolean;
};

export type UseOpacityControl = (isDrawerOpened: boolean) => void;

export type UseGestureStateHandler = (
  drawerAnimation: () => void,
  animatedPosition: Animated.Value,
) => (event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) => void;
