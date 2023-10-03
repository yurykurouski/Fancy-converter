import React from 'react';
import { Text, View } from 'react-native';

import { useStyles } from './SectionTitle.styles';

export const SectionTitle = React.memo(({ value }: { value: string }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
});
