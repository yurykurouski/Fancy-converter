import React, { useMemo } from 'react';
import { View } from 'react-native';

export const HorisontalDivider = ({ width }) => {
  const style = useMemo(
    () => ({
      width: width,
    }),
    [width],
  );

  return <View style={style} />;
};
