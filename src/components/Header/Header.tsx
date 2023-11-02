import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import {
  interpolate,
  scrollTo,
  SharedValue,
  useAnimatedRef,
  useDerivedValue,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { BLUR_AMOUNT, BLUR_RADIUS } from 'constants/constants';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { selectUIStatus } from 'store/ui/selectors';

import { Counter } from './components/Counter';
import { CurrencyTypeMenu } from './components/CurrencyTypeMenu';
import { Menu } from './components/Menu';
import { RemoveSweep } from './components/RemoveSweep';

import { useStyles } from './Header.styles';

type Props = {
  onOpenDrawer: () => void;
  isHeaderBlurred: boolean;
  headerSharedValue: SharedValue<number>;
};

export const Header = React.memo<Props>(
  ({ onOpenDrawer, isHeaderBlurred, headerSharedValue }) => {
    const styles = useStyles(isHeaderBlurred);

    const animatedScrollRef = useAnimatedRef<ScrollView>();

    const { colorScheme } = useSelector(selectUIStatus);
    const { activeCurrencyType } = useSelector(selectSelectedCurrencies);

    const handleMenuPress = () => {
      if (headerSharedValue.value) return;
      onOpenDrawer();
    };

    useDerivedValue(() =>
      scrollTo(
        animatedScrollRef,
        0,
        interpolate(headerSharedValue.value, [-1, 1], [0, 2]) * 32,
        true,
      ),
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
            contentOffset={{ x: 0, y: 32 }}
            ref={animatedScrollRef}
            scrollEnabled={false}
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>
            <View style={styles.containerFrame}>
              <Counter />
              <RemoveSweep />
            </View>
            <View style={styles.containerFrame}>
              <Menu onOpenDrawer={handleMenuPress} />
              <Text style={styles.header}>Fancy converter</Text>
            </View>
            <View style={[styles.containerFrame]}>
              <CurrencyTypeMenu activeCurrencyType={activeCurrencyType} />
            </View>
          </ScrollView>
        </View>
      </BlurView>
    );
  },
);
