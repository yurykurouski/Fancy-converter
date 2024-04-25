import { TNotificationData } from 'types';
import { proxy } from 'valtio';

type TUIStore = {
  isDrawerOpened: boolean;
  notificationData: TNotificationData | null;
};

const initialState: TUIStore = {
  isDrawerOpened: false,
  notificationData: null,
};

export const uiStore = proxy<TUIStore>(initialState);

export const uiStoreActions = {
  setDrawerOpenedState: (isDrawerOpened: boolean) => {
    uiStore.isDrawerOpened = isDrawerOpened;
  },

  setNotificationData: (notificationData: TNotificationData) => {
    uiStore.notificationData = notificationData;
  },
};
