import React from 'react';
import { Text } from 'react-native';

import { useStyles } from './SectionTitle.styles';

export const SectionTitle = React.memo(({ value }: { value: string }) => {
  const styles = useStyles();

  return <Text style={styles.text}>{value}</Text>;
});
