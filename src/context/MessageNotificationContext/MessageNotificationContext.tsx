import React, { lazy, Suspense } from 'react';
import { View } from 'react-native';

import { useNotificationMessage } from './WithNotification.hooks';
import { ShowMessage } from './WithNotification.types';

const Notification = lazy(() => import('./Notification'));

export const NotificationContext = React.createContext<ShowMessage>(null);

export const WithNotification: React.FC = ({ children }) => {
  const { showMessage, message } = useNotificationMessage();

  return (
    <NotificationContext.Provider value={showMessage}>
      {children}
      <Suspense fallback={<View />}>
        <Notification message={message} />
      </Suspense>
    </NotificationContext.Provider>
  );
};
