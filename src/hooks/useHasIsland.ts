import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TOP_INSET_WITH_ISLAND } from 'constants/constants';
import { isIos } from 'utils';

export const useIsHasIsland = () => {
  const { top } = useSafeAreaInsets();
  return isIos && top === TOP_INSET_WITH_ISLAND;
};
