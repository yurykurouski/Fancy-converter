import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import {
  scrollTo,
  SharedValue,
  useAnimatedRef,
  useDerivedValue,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { BottomSheetFlatListMethods } from '@gorhom/bottom-sheet';
import { THEME_COLORS } from 'assets/colors';
import { BLUR_AMOUNT, BLUR_RADIUS } from 'constants/index';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';

import { CurrencyTypeMenu } from './components/CurrencyTypeMenu';
import { Menu } from './components/Menu';

import { useStyles } from './Header.styles';

type Props = {
  onOpenDrawer: () => void;
  isHeaderBlurred: boolean;
  headerSharedValue: SharedValue<number>;
};

export const Header = React.memo(
  React.forwardRef<BottomSheetFlatListMethods, Props>(
    (
      { onOpenDrawer, isHeaderBlurred, headerSharedValue },
      containerListRef,
    ) => {
      const styles = useStyles(isHeaderBlurred);

      const animatedScrollRef = useAnimatedRef<ScrollView>();

      const { colorScheme } = useSelector(selectColorSchemeState);
      const { activeCurrencyType } = useSelector(selectSelectedCurrencies);

      useDerivedValue(() =>
        scrollTo(animatedScrollRef, 0, headerSharedValue.value * 32, true),
      );

      return (
        <BlurView
          style={styles.blurView}
          overlayColor="transparent"
          blurAmount={BLUR_AMOUNT}
          blurRadius={BLUR_RADIUS}
          reducedTransparencyFallbackColor={
            THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
          }
          blurType={colorScheme!}
          pointerEvents="box-none">
          <View style={styles.container}>
            <ScrollView
              contentOffset={{ x: 0, y: 0 }}
              ref={animatedScrollRef}
              scrollEnabled={false}
              style={styles.scrollContainer}
              showsVerticalScrollIndicator={false}>
              <View style={styles.containerFrame}>
                <Menu onOpenDrawer={onOpenDrawer} />
                <Text style={styles.header}>Fancy converter</Text>
              </View>
              <View style={[styles.containerFrame]}>
                <CurrencyTypeMenu
                  activeCurrencyType={activeCurrencyType}
                  ref={containerListRef}
                />
              </View>
            </ScrollView>
          </View>
        </BlurView>
      );
    },
  ),
);
