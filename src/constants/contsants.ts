export const DEFAULT_API_URL = 'https://belarusbank.by/api/kursExchange';
export const DEFAULT_API_CITY_REQUEST = '?city=';

export const API_CITIES_GRODNO = 'Гродно';

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

export const VIBRATION_DURATION = 50;
