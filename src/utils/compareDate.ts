import { TGetSaveDateReadable } from './utils.types';

export const getSaveDateReadable: TGetSaveDateReadable = currentDate =>
  `${currentDate.getDate()} ${currentDate.toLocaleString('default', {
    month: 'short',
  })} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
