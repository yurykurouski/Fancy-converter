import AsyncStorage from '@react-native-async-storage/async-storage';

export enum StorageKeys {
  SELECTED_CURRENCIES = 'SELECTED_CURRENCIES',
  EXCHANGE_COURSES = 'EXCHANGE_COURSES',
  LAST_COURSES_UPDATE = 'LAST_COURSES_UPDATE',
}

export const setToStorage = async (key: StorageKeys, value: unknown) =>
  AsyncStorage.setItem(key, JSON.stringify(value));

export const getFromStorage = async (key: StorageKeys) =>
  await AsyncStorage.getItem(key);
