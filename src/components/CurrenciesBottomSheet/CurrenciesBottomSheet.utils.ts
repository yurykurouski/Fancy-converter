import { isIos } from './../../utils/platform';

export const getSnapPoints = (
  bottomInset: number,
  topInset: number,
  windowHeight: number,
) => [70, windowHeight - ((isIos ? 38 : -4) + bottomInset + topInset)];
