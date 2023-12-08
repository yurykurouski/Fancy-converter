import LocalizedStrings from 'react-native-localization';

import by from './locales/by.json';
import en from './locales/en.json';
import pl from './locales/pl.json';
import ua from './locales/ua.json';

export const l = new LocalizedStrings({
  en,
  'be-BY': by,
  'uk-UA': ua,
  pl,
  ua,
  by,
});
