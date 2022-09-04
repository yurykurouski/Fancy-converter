import React, { createContext, FC, useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { getFromStorage, setToStorage, StorageKeys } from 'utils';

export const OnboardingContext = createContext(null);

export const OnboardingContextProvider: FC = ({ children }) => {
  const [isOnboarded, setIsOnboarded] = useState<boolean>(null);

  const setOnboardingStatus = async (value: boolean) => {
    setIsOnboarded(value);
    await setToStorage(StorageKeys.IS_ONBOARDED, value);
  };

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const isOnboarded = await getFromStorage(StorageKeys.IS_ONBOARDED);

      setIsOnboarded(JSON.parse(isOnboarded));
    };

    checkOnboardingStatus().finally(
      async () => await RNBootSplash.hide({ fade: true }),
    );
  }, []);

  return (
    <OnboardingContext.Provider value={{ isOnboarded, setOnboardingStatus }}>
      {children}
    </OnboardingContext.Provider>
  );
};
