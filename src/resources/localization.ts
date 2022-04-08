import LocalizedStrings from 'react-native-localization';

import by from './by.json';
import en from './en.json';
import ua from './ua.json';

export const l = new LocalizedStrings({
  en,
  'be-BY': by,
  'uk-UA': ua,
});

console.log(l.getInterfaceLanguage());
