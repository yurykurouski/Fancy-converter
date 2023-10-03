import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { WindowDimensions } from 'constants/constants';
import { EDimensions } from 'types';

export const useWindowDimensionChange = (dimension: EDimensions) => {
  const [windowDimension, setWindowDimension] = useState<number>(
    WindowDimensions[dimension],
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowDimension(window[dimension]);
    });
    return () => subscription?.remove();
  }, [dimension]);

  return windowDimension;
};
