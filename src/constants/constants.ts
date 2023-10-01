export const REQUEST_GET = 'GET';
export const REQUEST_CT_APPLICATION_JSON = 'application/json';

export const OPERATION_TYPE_OUT = 'out';
export const OPERATION_TYPE_IN = 'in';

export const INPUT_VALIDATION_REXEXP = new RegExp('^[0-9]*.[0-9]*$');

export enum SWIPE_DIRECTIONS {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export const HORIZONTAL_SWIPES = [
  SWIPE_DIRECTIONS.LEFT,
  SWIPE_DIRECTIONS.RIGHT,
];
export const VERTICAL_SWIPES = [SWIPE_DIRECTIONS.UP, SWIPE_DIRECTIONS.DOWN];

export const VIBRATION_DURATION = 30;

export const GITHUB_REPO_URL =
  'https://github.com/yurykurouski/Fancy-converter';
export const TG_CHANNEL_URL = 'https://t.me/fancyconverter';
export const PAYPAL_DONATION_URL = 'https://paypal.me/yurykurouski';

export const TOP_INSET_WITH_ISLAND = 59;

export const BLUR_AMOUNT = 26;
export const BLUR_RADIUS = 16;

export const DEFAULT_ANIMATION_DURATION = 150;
