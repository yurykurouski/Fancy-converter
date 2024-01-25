import React from 'react';
import { View } from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollIndicator } from 'components';
import { useWindowDimensionChange } from 'hooks';
import { DrawerCreditsSection } from 'screens/DrawerMainScreen/DrawerCreditsSection';
import { EDimensions } from 'types';
import { isAndroid } from 'utils';

import { DrawerMainSection } from './DrawerMainSection';
import { DrawerMoreSection } from './DrawerMoreSection';
import { DrawerSwitcher } from './DrawerSwitcher';

import { useStyles } from './DrawerMainScreen.styles';

export const DrawerMainScreen = React.forwardRef<DrawerLayout>(
  (_, drawerRef) => {
    const styles = useStyles();

    const translationY = useSharedValue(0);
    const indicatorState = useSharedValue(0);

    const windowHeight = useWindowDimensionChange(EDimensions.HEIGHT);
    const { top, bottom } = useSafeAreaInsets();

    const scrollHandler = useAnimatedScrollHandler({
      onScroll: event => {
        translationY.value = event.contentOffset.y;
      },
      onBeginDrag: () => {
        indicatorState.value = 1;
      },
      onEndDrag: () => {
        indicatorState.value = 0;
      },
    });

    const pageHeight = windowHeight - bottom - (isAndroid ? 0 : top);

    return (
      <View style={styles.contentContainer}>
        <ScrollIndicator
          ref={drawerRef}
          translationY={translationY}
          totalHeight={pageHeight * 3}
          indicatorState={indicatorState}
        />
        <Animated.ScrollView
          onScroll={scrollHandler}
          decelerationRate={'fast'}
          pagingEnabled
          showsVerticalScrollIndicator={false}>
          <DrawerMainSection pageHeight={pageHeight} />

          <DrawerMoreSection pageHeight={pageHeight} />

          <DrawerCreditsSection pageHeight={pageHeight} />
        </Animated.ScrollView>

        <DrawerSwitcher />
      </View>
    );
  },
);
