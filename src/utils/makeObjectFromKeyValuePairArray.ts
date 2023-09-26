import { TActionsMap } from 'hooks/types';

import { StorageKeys } from './storage';

export const makeObjectFromKeyValuePairArray = (
  keyValuePairs: readonly [StorageKeys, string][],
) =>
  keyValuePairs.reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value,
    };
  }, {}) as TActionsMap<string>;
