import { CompareDateByHour } from './utils.types';

export const compareDateByHour: CompareDateByHour = (
  currentDate,
  lastUpdateDate,
) =>
  currentDate.getHours() === lastUpdateDate.getHours() &&
  currentDate.getDate() === lastUpdateDate.getDate() &&
  currentDate.getMonth() === lastUpdateDate.getMonth() &&
  currentDate.getFullYear() === lastUpdateDate.getFullYear();
