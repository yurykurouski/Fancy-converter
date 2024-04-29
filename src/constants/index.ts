import { Dimensions } from 'react-native';
import { EAvailableFiatNames, EDimensions } from 'types';

export const APP_NAME = 'Converter';

export const REQUEST_GET = 'GET';
export const REQUEST_CT_APPLICATION_JSON = 'application/json';

//todo rename
export const INPUT_VALIDATION_REGEXP = new RegExp('^[0-9]*.[0-9]*$');

export const GITHUB_REPO_URL =
  'https://github.com/yurykurouski/Fancy-converter';
export const DONATION_URL = 'https://www.buymeacoffee.com/yury_kurouski';

export const TOP_INSET_WITH_ISLAND = 59;

export const DEFAULT_ANIMATION_DURATION = 150;

export const WindowDimensions = {
  [EDimensions.WIDTH]: Dimensions.get('window').width,
  [EDimensions.HEIGHT]: Dimensions.get('window').height,
};

export const HOUR_IN_MS = 3600000;

export const BOTTOMSHEET_EL_HEIGHT = 66;

export const INPUT_ELEMENT_HEIGHT = 72;

export const ICON_BUTTON_SIZE = 24;
export const HEADER_HEIGHT = 40;
export const CONTROLS_OFFSET = 30;

export const DEFAULT_CURRENCIES = {
  [EAvailableFiatNames.EUR]: '',
  [EAvailableFiatNames.USD]: '',
  [EAvailableFiatNames.JPY]: '',
  [EAvailableFiatNames.GBP]: '',
  [EAvailableFiatNames.CAD]: '',
  [EAvailableFiatNames.CHF]: '',
};
