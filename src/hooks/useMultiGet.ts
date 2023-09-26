import { useCallback } from 'react';
import { multiGetFromFromStorage, StorageKeys } from 'utils';
import { makeObjectFromKeyValuePairArray } from 'utils/makeObjectFromKeyValuePairArray';

import { TUseMultiGet } from './types';

export const useMultiGet: TUseMultiGet<Function> = actionsMap =>
  useCallback(async () => {
    const keyValuePairs = (await multiGetFromFromStorage(
      Object.keys(actionsMap) as StorageKeys[],
    )) as [StorageKeys, string][];

    const properties = makeObjectFromKeyValuePairArray(keyValuePairs);

    for (const key in properties) {
      actionsMap[key as keyof typeof properties]?.(
        properties?.[key as keyof typeof properties],
      );
    }
  }, [actionsMap]);
