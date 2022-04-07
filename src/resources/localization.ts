import LocalizedStrings from 'react-native-localization';

import by from './by.json';
import en from './en.json';

export const l = new LocalizedStrings({
  en,
  'be-BY': by,
});
