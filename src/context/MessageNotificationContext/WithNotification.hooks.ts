import { useCallback, useContext, useState } from 'react';
import { OnboardingContext } from 'context/OnboardingContext';
import { useIsHasIsland } from 'hooks/useHasIsland';

import {
  showNotification,
  showNotificationForIsland,
} from './notification-animations';
import { UseNotificationMessage } from './WithNotification.types';

export const useNotificationMessage: UseNotificationMessage = () => {
  const { isOnboarded: isOnboard } = useContext(OnboardingContext);
  const [message, setMessage] = useState(null);

  const hasIsland = useIsHasIsland();

  const showMessage = useCallback(
    (msg: string) => {
      if (isOnboard) {
        setMessage(msg);

        hasIsland ? showNotificationForIsland() : showNotification();
      }
    },
    [hasIsland, isOnboard],
  );

  return {
    showMessage,
    message,
  };
};
