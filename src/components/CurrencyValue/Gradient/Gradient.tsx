import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { useGradientAccentColor } from './Gradient.hooks';

import { styles } from './Gradient.styles';

type Props = {
  isReadyToDelete: boolean;
  isFocused: boolean;
};

export const Gradient = React.memo<Props>(({ isReadyToDelete, isFocused }) => {
  const [angle, setAngle] = useState(90);

  const accentColor = useGradientAccentColor(isFocused);

  useEffect(() => {
    if (isReadyToDelete) {
      const intervalId = setInterval(() => {
        setAngle(angle => angle + 1);
      }, 20);

      return () => clearInterval(intervalId);
    }
  }, [isReadyToDelete]);

  return (
    isReadyToDelete && (
      <LinearGradient
        colors={['#FC2C00', accentColor, accentColor, '#FC2C00']}
        useAngle
        angle={angle}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={styles.gradientContainer}
      />
    )
  );
});
