import AsyncStorage from '@react-native-async-storage/async-storage';

export enum StorageKeys {
  SELECTED_CURRENCIES = 'SELECTED_CURRENCIES',
  EXCHANGE_COURSES = 'EXCHANGE_COURSES',
  LAST_COURSES_UPDATE = 'LAST_COURSES_UPDATE',
  LAST_COURSES_SAVE_DATE = 'LAST_COURSES_SAVE_DATE',
  COLOR_SCHEME = 'COLOR_SCHEME',
  IS_ONBOARDED = 'IS_ONBOARDED',
}

export const setToStorage = async (key: StorageKeys, value: unknown) =>
  AsyncStorage.setItem(key, JSON.stringify(value));

export const getFromStorage = async (key: StorageKeys) =>
  await AsyncStorage.getItem(key);

export const multiSetToStorage = async (
  keyValuePairs: [StorageKeys, string][],
) => AsyncStorage.multiSet(keyValuePairs);
