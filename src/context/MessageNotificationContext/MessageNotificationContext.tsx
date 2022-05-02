import React from 'react';
import { Animated, Text } from 'react-native';
import { l } from 'resources/localization';

import { useNotificationAnimation } from './WithNotification.hooks';
import { StartNotification } from './WithNotification.types';

import { useStyles } from './WithNotification.styles';

export const NotificationContext = React.createContext<StartNotification>(null);

export const WithNotification: React.FC = ({ children }) => {
  const { animatedPosition, startAnimation, message } =
    useNotificationAnimation();

  const styles = useStyles();

  return (
    <NotificationContext.Provider value={startAnimation}>
      {children}
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: animatedPosition }] },
        ]}>
        <Text style={styles.text}>{l[message]}</Text>
      </Animated.View>
    </NotificationContext.Provider>
  );
};
