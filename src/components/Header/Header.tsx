import React from 'react';
import { Pressable, Text } from 'react-native';

import { useStyles } from './Header.styles';

type Props = {
  onLongPress: () => void;
};

export const Header = React.memo<Props>(({ onLongPress }) => {
  const styles = useStyles();
  return (
    <Pressable onLongPress={onLongPress} style={styles.container}>
      <Text style={styles.header}>Fancy converter</Text>
    </Pressable>
  );
});
