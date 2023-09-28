import { SharedValue } from 'react-native-reanimated';

export type TProps = {
  animatedPosition: SharedValue<number>;
  closeDrawer: () => void;
};
