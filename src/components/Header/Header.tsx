import React from 'react';
import { Text, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { BottomSheetFlatListMethods } from '@gorhom/bottom-sheet';
import { THEME_COLORS } from 'assets/colors';
import { APP_NAME, BLUR_AMOUNT, BLUR_RADIUS } from 'constants/index';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';

import { CurrencyTypeMenu } from './components/CurrencyTypeMenu';
import { Menu } from './components/Menu';

import { useStyles } from './Header.styles';

type Props = {
  onOpenDrawer: () => void;
  headerSharedValue: SharedValue<number>;
};

export const Header = React.memo(
  React.forwardRef<BottomSheetFlatListMethods, Props>(
    ({ onOpenDrawer, headerSharedValue }, containerListRef) => {
      const styles = useStyles();

      const { colorScheme } = useSelector(selectColorSchemeState);
      const { activeCurrencyType } = useSelector(selectSelectedCurrencies);

      const animatedPositionStyle = useAnimatedStyle(() => {
        if (headerSharedValue.value < 0) {
          return {};
        }

        return {
          transform: [
            {
              translateY: -headerSharedValue.value * 32,
            },
          ],
        };
      });

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
            <View style={styles.scrollContainer}>
              <Animated.View
                style={[styles.containerFrame, animatedPositionStyle]}>
                <Menu onOpenDrawer={onOpenDrawer} />
                <Text style={styles.header}>{APP_NAME}</Text>
              </Animated.View>
              <Animated.View
                style={[styles.containerFrame, animatedPositionStyle]}>
                <CurrencyTypeMenu
                  activeCurrencyType={activeCurrencyType}
                  ref={containerListRef}
                />
              </Animated.View>
            </View>
          </View>
        </BlurView>
      );
    },
  ),
);
