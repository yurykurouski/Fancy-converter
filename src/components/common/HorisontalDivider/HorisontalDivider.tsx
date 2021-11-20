import React, { useMemo } from 'react';
import { View } from 'react-native';

type Props = {
  width: number;
};

export const HorisontalDivider = React.memo<Props>(({ width }) => {
  const style = useMemo(
    () => ({
      width: width,
    }),
    [width],
  );

  return <View style={style} />;
});
