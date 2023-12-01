import { INPUT_ELEMENT_HEIGHT } from 'constants/constants';
import { useWindowDimensionChange } from 'hooks';
import { LayoutProvider } from 'recyclerlistview';
import { EDimensions } from 'types';

export const useLayoutProvider = () => {
  const windowWidth = useWindowDimensionChange(EDimensions.WIDTH);

  return new LayoutProvider(
    () => 'regular',
    (_, dim) => {
      dim.height = INPUT_ELEMENT_HEIGHT;
      dim.width = windowWidth;
    },
  );
};
