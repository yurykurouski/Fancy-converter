import { useCallback, useState } from 'react';

import { showNotification } from './notification-animations';
import { UseNotificationMessage } from './WithNotification.types';

export const useNotificationMessage: UseNotificationMessage = () => {
  const [message, setMessage] = useState(null);

  const showMessage = useCallback((msg: string) => {
    setMessage(msg);

    showNotification();
    //todo: for case if i find a solution to change default small app icon
    /*  if (Platform.OS === 'ios') {
      ToastAndroid.showWithGravity(
        l[msg],
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    } else if (Platform.OS === 'android') {
      setMessage(l[msg]);

      showNotification();
    } */
  }, []);

  return {
    showMessage,
    message,
  };
};
