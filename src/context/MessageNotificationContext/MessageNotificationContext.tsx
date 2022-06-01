import React from 'react';
import { Animated, Platform, Text } from 'react-native';

import { animatedPosition } from './notification-animations';
import { useNotificationMessage } from './WithNotification.hooks';
import { ShowMessage } from './WithNotification.types';

import { useStyles } from './WithNotification.styles';

export const NotificationContext = React.createContext<ShowMessage>(null);

export const WithNotification: React.FC = ({ children }) => {
  const { showMessage, message } = useNotificationMessage();

  const styles = useStyles();

  return (
    <NotificationContext.Provider value={showMessage}>
      {children}
      {Platform.OS === 'ios' && (
        <Animated.View
          style={[
            styles.container,
            { transform: [{ translateY: animatedPosition }] },
          ]}>
          <Text style={styles.text}>{message}</Text>
        </Animated.View>
      )}
    </NotificationContext.Provider>
  );
};
