import { useCallback, useState } from 'react';
import { Platform, ToastAndroid } from 'react-native';
import { l } from 'resources/localization';

import { showNotification } from './notification-animations';
import { UseNotificationMessage } from './WithNotification.types';

export const useNotificationMessage: UseNotificationMessage = () => {
  const [message, setMessage] = useState(null);

  const showMessage = useCallback((msg: string) => {
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravity(
        l[msg],
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    } else if (Platform.OS === 'ios') {
      setMessage(l[msg]);

      showNotification();
    }
  }, []);

  return {
    showMessage,
    message,
  };
};
