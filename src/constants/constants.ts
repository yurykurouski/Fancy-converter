import { Dimensions } from 'react-native';
import { EDimensions } from 'types';

export const REQUEST_GET = 'GET';
export const REQUEST_CT_APPLICATION_JSON = 'application/json';

//todo rename
export const INPUT_VALIDATION_REGEXP = new RegExp('^[0-9]*.[0-9]*$');

export const GITHUB_REPO_URL =
  'https://github.com/yurykurouski/Fancy-converter';
export const TG_CHANNEL_URL = 'https://t.me/fancyconverter';
export const PAYPAL_DONATION_URL = 'https://paypal.me/yurykurouski';

export const TOP_INSET_WITH_ISLAND = 59;

export const BLUR_AMOUNT = 26;
export const BLUR_RADIUS = 16;

export const DEFAULT_ANIMATION_DURATION = 150;

export const WindowDimensions = {
  [EDimensions.WIDTH]: Dimensions.get('window').width,
  [EDimensions.HEIGHT]: Dimensions.get('window').height,
};

export const HOUR_IN_MS = 3600000;

export const BOTTOMSHEET_EL_HEIGHT = 66;

export const INPUT_ELEMENT_HEIGHT = 74;

export const ICON_BUTTON_SIZE = 24;
