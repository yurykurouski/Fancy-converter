import { useCallback } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { l } from 'resources/localization';
import { getFromStorage, showNoConnectionAlert, StorageKeys } from 'utils';

import { UseGetCoursesFromStorage } from './types';

export const useGetCoursesFromStorage: UseGetCoursesFromStorage = (
  setExchangeCourse,
  startNotification,
) =>
  useCallback(
    onInit => {
      if (onInit) {
        NetInfo.fetch().then(async state => {
          if (!state.isConnected) {
            await getFromStorage(StorageKeys.LAST_COURSES_SAVE_DATE).then(
              oldDate => showNoConnectionAlert(undefined, oldDate),
            );
          }
        });
      }

      getFromStorage(StorageKeys.EXCHANGE_COURSES)
        .then(value => {
          if (value) {
            const parsed = JSON.parse(value);
            setExchangeCourse(parsed);
          }
        })
        .then(() =>
          startNotification(l['notification.message.update_courses.cache']),
        );
    },
    [setExchangeCourse, startNotification],
  );
