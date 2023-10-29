import React, { useEffect, useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { BLUR_AMOUNT, BLUR_RADIUS } from 'constants/constants';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { selectColorSchemeState, selectUIStatus } from 'store/ui/selectors';

import { Counter } from './components/Counter';
import { CurrencyTypeMenu } from './components/CurrencyTypeMenu';
import { Menu } from './components/Menu';
import { RemoveSweep } from './components/RemoveSweep';

import { useStyles } from './Header.styles';

type Props = {
  onOpenDrawer: () => void;
  isHeaderBlurred: boolean;
};

export const Header = React.memo<Props>(({ onOpenDrawer, isHeaderBlurred }) => {
  const styles = useStyles(isHeaderBlurred);

  const scrollRef = useRef<ScrollView>(null);

  const { colorScheme } = useSelector(selectColorSchemeState);
  const { isInEditMode, activeCurrencyType } = useSelector(
    selectSelectedCurrencies,
  );
  const { bottomSheetIndex } = useSelector(selectUIStatus);

  const handleMenuPress = () => {
    if (bottomSheetIndex) return;
    onOpenDrawer();
  };

  useEffect(() => {
    if (bottomSheetIndex) {
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    } else if (isInEditMode) {
      scrollRef.current?.scrollToEnd({ animated: true });
    } else {
      scrollRef.current?.scrollTo({ y: 32, animated: true });
    }
  }, [bottomSheetIndex, isInEditMode]);

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
          ref={scrollRef}
          scrollEnabled={false}
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.containerFrame]}>
            <CurrencyTypeMenu activeCurrencyType={activeCurrencyType} />
          </View>
          <View style={styles.containerFrame}>
            <Menu onOpenDrawer={handleMenuPress} />
            <Text style={styles.header}>Fancy converter</Text>
          </View>
          <View style={styles.containerFrame}>
            <Counter />
            <RemoveSweep />
          </View>
        </ScrollView>
      </View>
    </BlurView>
  );
});
