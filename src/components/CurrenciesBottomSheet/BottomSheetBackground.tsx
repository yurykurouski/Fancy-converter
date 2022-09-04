import React, { FC } from 'react';
import { View } from 'react-native';
import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';

import { useStyles } from './CurrenciesBottomSheet.styles';

export const BottomSheetBackground: FC<BottomSheetBackgroundProps> = ({
  style,
}) => {
  const styles = useStyles();

  return <View pointerEvents="none" style={[style, styles.background]} />;
};
