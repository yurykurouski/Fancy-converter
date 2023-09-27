import React, { FC } from 'react';
import { View } from 'react-native';
import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import { useTheme } from 'hooks';

const useStyles = () =>
  useTheme(theme => ({
    backgroundStyle: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: theme.ACCENT_COLOR_DARKER,
    },
  }));

export const BottomSheetBackground: FC<BottomSheetBackgroundProps> = ({
  style,
  pointerEvents,
}) => {
  const styles = useStyles();

  return (
    <View
      pointerEvents={pointerEvents}
      style={[style, styles.backgroundStyle]}
    />
  );
};
