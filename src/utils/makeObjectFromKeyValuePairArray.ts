import { KeyValuePair } from '@react-native-async-storage/async-storage/lib/typescript/types';

export const makeObjectFromKeyValuePairArray = (
  keyValuePairs: readonly KeyValuePair[],
) =>
  keyValuePairs.reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value,
    };
  }, {});
