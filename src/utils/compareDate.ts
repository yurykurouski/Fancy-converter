import { getFromStorage, setToStorage, StorageKeys } from './storage';
import {
  CompareDateByHour,
  GetIsCoursesCheckedLastHour,
  GetSaveDate,
} from './utils.types';

export const compareDateByHour: CompareDateByHour = (
  currentDate,
  lastUpdateDate,
) =>
  currentDate.getHours() === lastUpdateDate.getHours() &&
  currentDate.getDate() === lastUpdateDate.getDate() &&
  currentDate.getMonth() === lastUpdateDate.getMonth() &&
  currentDate.getFullYear() === lastUpdateDate.getFullYear();

export const getIsCoursesCheckedLastHour: GetIsCoursesCheckedLastHour =
  async currentDate => {
    const lastCoursesUpdate = await getFromStorage(
      StorageKeys.LAST_COURSES_UPDATE,
    );

    if (!!!lastCoursesUpdate) {
      await setToStorage(
        StorageKeys.LAST_COURSES_UPDATE,
        currentDate.getTime(),
      );

      return false;
    }

    const lastUpdateDate = new Date(Number(lastCoursesUpdate));

    return compareDateByHour(currentDate, lastUpdateDate);
  };

export const getSaveDate: GetSaveDate = currentDate =>
  `${currentDate.getDate()}-${currentDate.toLocaleString('default', {
    month: 'short',
  })}-${currentDate.getFullYear()}`;
