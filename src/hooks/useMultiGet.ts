import { useCallback } from 'react';
import { multiGetFromFromStorage, StorageKeys } from 'utils';
import { makeObjectFromKeyValuePairArray } from 'utils/makeObjectFromKeyValuePairArray';

import { TUseMultiGet } from './types';

export const useMultiGet: TUseMultiGet = actionsMap =>
  useCallback(async () => {
    const keyValuePairs = await multiGetFromFromStorage(
      Object.keys(actionsMap) as StorageKeys[],
    );

    const properties = makeObjectFromKeyValuePairArray(keyValuePairs);

    for (const key in properties) {
      actionsMap[key](properties?.[key]);
    }
  }, [actionsMap]);
