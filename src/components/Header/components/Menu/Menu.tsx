import React from 'react';
import { StyleSheet } from 'react-native';
import { MenuIcon } from 'assets/icons';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginLeft: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

type TProps = {
  onOpenDrawer: () => void;
};

export const Menu = ({ onOpenDrawer }: TProps) => {
  return (
    <ButtonWithIPadOSInteraction
      onPress={onOpenDrawer}
      hitSlop={5}
      containerStyle={styles.container}>
      <MenuIcon size={22} />
    </ButtonWithIPadOSInteraction>
  );
};
