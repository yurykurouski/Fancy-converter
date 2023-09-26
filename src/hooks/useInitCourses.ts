import { useContext, useEffect, useMemo } from 'react';
import { NotificationContext } from 'context';
import { l } from 'resources/localization';
import {
  getFromStorage,
  getIsCoursesCheckedLastHour,
  StorageKeys,
} from 'utils';

import { useSetExchangeCourses } from './store';
import { useLoadCourses } from './useLoadCourses';

//TODO
export const useInitCourses = () => {
  const startNotification = useContext(NotificationContext);

  const currentDate = useMemo(() => new Date(), []);
  const loadCourses = useLoadCourses();
  const setCourses = useSetExchangeCourses();

  // useEffect(() => {
  //   loadCourses()
  //     .then(() => {
  //       RNBootSplash.hide({ fade: true });
  //     })
  //     .then(() => {
  //       startNotification;
  //     });
  // }, [loadCourses]);

  useEffect(() => {
    getIsCoursesCheckedLastHour(currentDate).then(isCheckedLastHour => {
      if (isCheckedLastHour) {
        loadCourses()
          // .then(async () => await RNBootSplash.hide({ fade: true }))
          .then(async () => {
            startNotification?.(
              l['notification.message.update_courses.network'],
            );
          });
      } else {
        getFromStorage(StorageKeys.EXCHANGE_COURSES)
          .then(value => {
            //@ts-expect-error todo
            setCourses(value);
            // console.log('value: ', value);
          })
          // .then(async () => await RNBootSplash.hide({ fade: true }))
          .then(() => {
            startNotification?.(l['notification.message.update_courses.cache']);
          });
      }
    });
  }, [currentDate, loadCourses, setCourses, startNotification]);
};
