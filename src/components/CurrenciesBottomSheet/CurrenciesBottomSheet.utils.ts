import { HEADER_HEIGHT } from 'constants';

export const getSnapPoints = (
  bottomInset: number,
  topInset: number,
  windowHeight: number,
) => [70, windowHeight - (topInset + bottomInset + HEADER_HEIGHT)];
