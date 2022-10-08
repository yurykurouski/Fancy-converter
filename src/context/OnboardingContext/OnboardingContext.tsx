import React, { createContext, FC, useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { getFromStorage, setToStorage, StorageKeys } from 'utils';

type OnboardingContext = {
  isOnboarded: boolean;
  setOnboardingStatus: (value: boolean) => Promise<void>;
  isLoading: boolean;
};

export const OnboardingContext = createContext<OnboardingContext>(null);

export const OnboardingContextProvider: FC = ({ children }) => {
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const setOnboardingStatus = async (value: boolean) => {
    setIsOnboarded(value);
    await setToStorage(StorageKeys.IS_ONBOARDED, value);
  };

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      await getFromStorage(StorageKeys.IS_ONBOARDED)
        .then(value => setIsOnboarded(JSON.parse(value) || false))
        .then(() => setIsLoading(false));
    };

    checkOnboardingStatus().finally(
      async () => await RNBootSplash.hide({ fade: true }),
    );
  }, []);

  return (
    <OnboardingContext.Provider
      value={{ isOnboarded, setOnboardingStatus, isLoading }}>
      {children}
    </OnboardingContext.Provider>
  );
};
