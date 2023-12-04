import { RefObject } from 'react';
import { DrawerLayout } from 'react-native-gesture-handler';

export type TUseOpenDrawerAnimations = (drawerRef: RefObject<DrawerLayout>) => {
  closeDrawer: () => void;
  openDrawer: () => void;
};

export type TUseHandleBackPress = (
  closeDrawer: () => void,
  drawerRef: RefObject<DrawerLayout>,
) => void;
