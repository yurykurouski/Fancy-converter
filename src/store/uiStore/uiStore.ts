import { TNotificationData } from 'types';
import { proxy } from 'valtio';

type TUIStore = {
  notificationData: TNotificationData | null;
};

const initialState: TUIStore = {
  notificationData: null,
};

export const uiStore = proxy<TUIStore>(initialState);

export const uiStoreActions = {
  setNotificationData: (
    notificationData: Omit<TNotificationData, 'timeStamp'>,
  ) => {
    uiStore.notificationData = { ...notificationData, timeStamp: Date.now() };
  },
};
