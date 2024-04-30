import React, { Text, View } from 'react-native';
import { EMPTY_LIST_PLACEHOLDER } from 'constants';

import { useStyles } from './ListEmptyComponent.styles';

export const ListEmptyComponent = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{EMPTY_LIST_PLACEHOLDER}</Text>
    </View>
  );
};
