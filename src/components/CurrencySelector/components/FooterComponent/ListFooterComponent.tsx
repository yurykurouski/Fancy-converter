import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from 'hooks';
import { selectExchangeCourses } from 'store/exchangeCourses/selectors';
import { getSaveDateReadable } from 'utils';

const useStyles = () =>
  useTheme(theme => ({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingVertical: 6,
    },
    text: {
      color: theme.FONT_COLOR_FADED,
      fontSize: 12,
    },
  }));

export const ListFooterComponent = () => {
  const styles = useStyles();
  const { lastUpdated } = useSelector(selectExchangeCourses);

  if (!lastUpdated) return null;

  const test = getSaveDateReadable(new Date(lastUpdated));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{test}</Text>
    </View>
  );
};
