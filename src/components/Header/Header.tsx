import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './Header.styles';

type Props = {
  onPress: () => void;
};

export const Header = React.memo<Props>(({ onPress }) => {
  return (
    <Pressable onLongPress={onPress}>
      <Text style={styles.header}>Fancy converter</Text>
    </Pressable>
  );
});
