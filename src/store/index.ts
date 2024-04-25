import { useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { useAppStateV2 } from 'hooks/useAppState';

import { onBackground, rehydrateStore } from './helpers';
import { storeConfig } from './store.config';

export const useInitStore = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    (async () => {
      await rehydrateStore(storeConfig);
      await RNBootSplash.hide({ fade: true });

      setIsHydrated(true);
    })();
  }, []);

  useAppStateV2({ onBackground: () => onBackground(storeConfig) });

  return { isHydrated };
};
