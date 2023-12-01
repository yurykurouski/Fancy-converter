import React from 'react';
import { Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import { SharedValue } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { useOpedDrawerGesture } from 'components/CurrenciesMainContent/CurrenciesMainContent.hooks';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { getSaveDateReadable } from 'utils';

import { useStyles } from './ListFooterComponent.styles';

export const ListFooterComponent = ({
  drawerPosition,
}: {
  drawerPosition: SharedValue<number>;
}) => {
  const styles = useStyles();
  const { lastUpdated } = useSelector(selectExchangeCourses);

  const panGesture = useOpedDrawerGesture(drawerPosition);

  if (!lastUpdated) return null;

  const saveDate = getSaveDateReadable(new Date(lastUpdated));

  return (
    <GestureDetector gesture={panGesture}>
      <View style={styles.container}>
        <Text style={styles.text}>{saveDate}</Text>
      </View>
    </GestureDetector>
  );
};
