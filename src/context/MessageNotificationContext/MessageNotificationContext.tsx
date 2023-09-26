import React, {
  createContext,
  FC,
  lazy,
  PropsWithChildren,
  Suspense,
} from 'react';
import { View } from 'react-native';

import { useNotificationMessage } from './WithNotification.hooks';
import { ShowMessage } from './WithNotification.types';

const Notification = lazy(() => import('./Notification'));

//TODO: think about refactoring
//@ts-expect-error
export const NotificationContext = createContext<ShowMessage>();

export const WithNotification: FC<PropsWithChildren> = ({ children }) => {
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
