import { SharedValue } from 'react-native-reanimated';

export type TProps = {
  drawerPosition: SharedValue<number>;
  closeDrawer: () => void;
};
