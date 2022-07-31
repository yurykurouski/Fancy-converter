import React from 'react';
import { Animated, Text } from 'react-native';

import { animatedPosition } from './notification-animations';

import { useStyles } from './WithNotification.styles';

const Notification = ({ message }: { message: string }) => {
  const styles = useStyles();
  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: animatedPosition }] },
      ]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

export default Notification;
