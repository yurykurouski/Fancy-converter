import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useIsHasIsland } from 'hooks/useHasIsland';
import { selectOnBoardingStatus } from 'store/onboardingStatus/selectors';

import {
  showNotification,
  showNotificationForIsland,
} from './notification-animations';
import { UseNotificationMessage } from './WithNotification.types';

export const useNotificationMessage: UseNotificationMessage = () => {
  const { isOnBoarded } = useSelector(selectOnBoardingStatus);
  const [message, setMessage] = useState<string>('');

  const hasIsland = useIsHasIsland();

  const showMessage = useCallback(
    (msg: string) => {
      if (isOnBoarded) {
        setMessage(msg);

        hasIsland ? showNotificationForIsland() : showNotification();
      }
    },
    [hasIsland, isOnBoarded],
  );

  return {
    showMessage,
    message,
  };
};
