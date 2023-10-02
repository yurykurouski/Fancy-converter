import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { MenuIcon } from 'assets/icons';
import { useAndroidRippleConfig } from 'hooks';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 10,
  },
});

type TProps = {
  onOpenDrawer: () => void;
};

export const Menu = ({ onOpenDrawer }: TProps) => {
  const rippleConfig = useAndroidRippleConfig();

  return (
    <Pressable
      onPress={onOpenDrawer}
      hitSlop={5}
      android_ripple={rippleConfig}
      style={styles.container}>
      <MenuIcon size={24} />
    </Pressable>
  );
};
