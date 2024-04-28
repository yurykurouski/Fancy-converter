import { isIos } from 'utils';

export const getSnapPoints = (
  bottomInset: number,
  topInset: number,
  windowHeight: number,
) => [70, windowHeight - ((isIos ? 38 : -4) + bottomInset + topInset)];
