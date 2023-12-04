import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { getSaveDateReadable } from 'utils';

import { useStyles } from './ListFooterComponent.styles';

export const ListFooterComponent = () => {
  const styles = useStyles();
  const { lastUpdated } = useSelector(selectExchangeCourses);

  if (!lastUpdated) return null;

  const saveDate = getSaveDateReadable(new Date(lastUpdated));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{saveDate}</Text>
    </View>
  );
};
