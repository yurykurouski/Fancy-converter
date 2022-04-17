import { useCallback, useEffect, useMemo, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import {
  compareDateByHour,
  getFromStorage,
  setToStorage,
  showNoConnectionAlert,
  StorageKeys,
} from 'utils';

import { currenciesService } from '../services/currencies-service';

import { NOTIFICATION_MESSAGES, UseGetCurrenciesExchangeCourse } from './types';

export const useGetCurrenciesExchangeCourse: UseGetCurrenciesExchangeCourse =
  startNotification => {
    const [isLoading, setIsLoading] = useState(false);
    const [exchangeCourse, setExchangeCourse] = useState(null);

    const currentDate = useMemo(() => new Date(), []);
    const saveDate = `${currentDate.getDate()}-${currentDate.toLocaleString(
      'default',
      { month: 'short' },
    )}-${currentDate.getFullYear()}`;

    const isCoursesCheckedLastHour = useCallback(async () => {
      const lastCoursesUpdate = await getFromStorage(
        StorageKeys.LAST_COURSES_UPDATE,
      );

      if (!lastCoursesUpdate) {
        await setToStorage(
          StorageKeys.LAST_COURSES_UPDATE,
          currentDate.getTime(),
        );

        return false;
      }

      const lastUpdateDate = new Date(Number(lastCoursesUpdate));

      return compareDateByHour(currentDate, lastUpdateDate);
    }, [currentDate]);

    const getCoursesFromStorage = useCallback(
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
          .then((value: string) => {
            const parsed = JSON.parse(value);
            setExchangeCourse(parsed);
          })
          .then(() => startNotification(NOTIFICATION_MESSAGES.FROM_STORAGE));
      },
      [startNotification],
    );

    const reloadCourses = useCallback(() => {
      setIsLoading(true);

      currenciesService
        .getDailyCourses()
        .then(({ rates }) => {
          setExchangeCourse(rates);

          setToStorage(StorageKeys.EXCHANGE_COURSES, rates);
          setToStorage(StorageKeys.LAST_COURSES_SAVE_DATE, saveDate);
        })
        .catch(async () => {
          await getFromStorage(StorageKeys.LAST_COURSES_SAVE_DATE).then(
            oldDate => showNoConnectionAlert(getCoursesFromStorage, oldDate),
          );
          await setToStorage(StorageKeys.LAST_COURSES_UPDATE, null);
        })
        .finally(() => setIsLoading(false))
        .then(() => startNotification(NOTIFICATION_MESSAGES.FROM_NETWORK));
    }, [getCoursesFromStorage, saveDate, startNotification]);

    useEffect(() => {
      isCoursesCheckedLastHour().then(isCheckedLastHour => {
        if (!isCheckedLastHour) {
          reloadCourses();
        } else {
          getCoursesFromStorage(true);
        }
      });
    }, [getCoursesFromStorage, isCoursesCheckedLastHour, reloadCourses]);

    return { isLoading, exchangeCourse, reloadCourses };
  };
