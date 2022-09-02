import { useCallback, useContext, useState } from 'react';
import { OnboardingContext } from 'context/OnboardingContext';

import { showNotification } from './notification-animations';
import { UseNotificationMessage } from './WithNotification.types';

export const useNotificationMessage: UseNotificationMessage = () => {
  const { isOnboarded } = useContext(OnboardingContext);
  const [message, setMessage] = useState(null);

  const showMessage = useCallback(
    (msg: string) => {
      if (isOnboarded) {
        setMessage(msg);

        showNotification();
      }
    },
    [isOnboarded],
  );

  return {
    showMessage,
    message,
  };
};
