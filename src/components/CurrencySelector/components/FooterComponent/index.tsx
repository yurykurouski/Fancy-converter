import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTrackKeyboardStatus } from 'components/CurrencySelector/CurrencySelector.hooks';

const styles = StyleSheet.create({
  containerWithKB: { height: 35 },
  containerWithoutKB: { height: 75 },
});

export const ListFooterComponent = () => {
  const isKeyBoardOpened = useTrackKeyboardStatus();
  return (
    <View
      style={
        isKeyBoardOpened ? styles.containerWithKB : styles.containerWithoutKB
      }
    />
  );
};
