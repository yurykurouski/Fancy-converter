import React from 'react';
import { Animated, Text } from 'react-native';

import { useNotificationAnimation } from './WithNotification.hooks';
import { StartNotification } from './WithNotification.types';

import { styles } from './WithNotification.styles';

export const NotificationContext = React.createContext<StartNotification>(null);

export const WithNotification: React.FC = ({ children }) => {
  const { animatedPosition, startAnimation, message } =
    useNotificationAnimation();

  return (
    <NotificationContext.Provider value={startAnimation}>
      {children}
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: animatedPosition }] },
        ]}>
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    </NotificationContext.Provider>
  );
};
