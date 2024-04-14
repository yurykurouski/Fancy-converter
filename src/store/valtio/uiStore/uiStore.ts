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
//TODO
// extraReducers(builder) {
//   builder
//     .addCase(
//       FavoriteCurrenciesSliceActions.setFavoriteCurrency,
//       (state, action) => {
//         state.notificationData = {
//           type: ENotificationType.ADD_FAVORITE,
//           timeStamp: Date.now(),
//           data: action.payload.currencyName,
//         };
//       },
//     )
//     .addCase(
//       FavoriteCurrenciesSliceActions.removeFavoriteCurrency,
//       (state, action) => {
//         state.notificationData = {
//           type: ENotificationType.REMOVE_FAVORITE,
//           timeStamp: Date.now(),
//           data: action.payload,
//         };
//       },
//     )
// };
