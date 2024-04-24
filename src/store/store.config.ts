import { TStoreConfig } from 'types';

import { colorSchemeStoreConfig } from './colorSchemeStore/colorSchemeStore';
import { exchangeRateStoreConfig } from './exchangeRateStore/exchangeRateStore';
import { favoriteCurrencyStoreConfig } from './favoriteCurrenciesStore/favoriteCurrenciesStore';
import { onboardingStoreConfig } from './onboardingStatusStore/onboardingStatusStore';

export enum PERSISTED_STORES {
  ONBOARDING_STATUS = 'onboardingStatusStore',
  COLOR_SCHEME = 'colorSchemeStore',
  EXCHANGE_RATE = 'exchangeRateStore',
  FAVORITE_CURRENCIES = 'favoriteCurrencies',
}

export const storeConfig: TStoreConfig = {
  [PERSISTED_STORES.ONBOARDING_STATUS]: onboardingStoreConfig,
  [PERSISTED_STORES.EXCHANGE_RATE]: exchangeRateStoreConfig,
  [PERSISTED_STORES.COLOR_SCHEME]: colorSchemeStoreConfig,
  [PERSISTED_STORES.FAVORITE_CURRENCIES]: favoriteCurrencyStoreConfig,
};
