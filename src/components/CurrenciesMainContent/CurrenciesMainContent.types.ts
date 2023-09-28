import { SharedValue } from 'react-native-reanimated';

export type TUseOpenDrawerAnimations = () => {
  animatedPosition: SharedValue<number>;
  closeDrawer: () => void;
  openDrawer: () => void;
};

export type TUseHandleBackPress = (closeDrawer: () => void) => void;
