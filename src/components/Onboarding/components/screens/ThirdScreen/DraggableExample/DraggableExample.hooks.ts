import { Animated } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

const MAIN_ITEM_OFFSET = new Animated.Value(0);
const SECOND_ITEM_OFFSET = new Animated.Value(0);

const RIPPLE_SCALE_VALUE = new Animated.Value(0);
const HANDLE_COLOR_VALUE = new Animated.Value(0);

const MAIN_ITEM_OPACITY = new Animated.Value(1);

export const useDragAnimatedStyles = () => {
  const { colorScheme } = useSelector(selectColorSchemeState);

  return {
    animatedMainStyles: {
      transform: [{ translateY: MAIN_ITEM_OFFSET }],
      opacity: MAIN_ITEM_OPACITY,
      zIndex: 1,
    },
    animatedSecondaryStyles: {
      transform: [{ translateY: SECOND_ITEM_OFFSET }],
    },
    animatedHandleColorStyle: {
      backgroundColor: HANDLE_COLOR_VALUE.interpolate({
        inputRange: [0, 1],
        outputRange: [
          THEME_COLORS[colorScheme!].FONT_COLOR_FADED,
          THEME_COLORS[colorScheme!].ACCENT_COLOR_LIGHTER,
        ],
      }),
    },
    animatedRippleStyle: {
      transform: [
        {
          scale: RIPPLE_SCALE_VALUE,
        },
      ],
    },
  };
};

export const useDragAnimation = () => {
  return () => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(RIPPLE_SCALE_VALUE, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.delay(500),
        Animated.timing(MAIN_ITEM_OFFSET, {
          toValue: 65,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.delay(500),
        Animated.timing(RIPPLE_SCALE_VALUE, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        //second cycle
        Animated.delay(2000),
        Animated.timing(RIPPLE_SCALE_VALUE, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.delay(500),
        Animated.timing(MAIN_ITEM_OFFSET, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.delay(500),
        Animated.timing(RIPPLE_SCALE_VALUE, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(HANDLE_COLOR_VALUE, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.delay(1500),
        Animated.timing(HANDLE_COLOR_VALUE, {
          toValue: 0,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.delay(2000),
        Animated.timing(HANDLE_COLOR_VALUE, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.delay(1500),
        Animated.timing(HANDLE_COLOR_VALUE, {
          toValue: 0,
          duration: 400,
          useNativeDriver: false,
        }),
      ]),
      Animated.sequence([
        Animated.delay(100),
        Animated.timing(MAIN_ITEM_OPACITY, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(1600),
        Animated.timing(MAIN_ITEM_OPACITY, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(2100),
        Animated.timing(MAIN_ITEM_OPACITY, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(1600),
        Animated.timing(MAIN_ITEM_OPACITY, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.delay(1200),
        Animated.timing(SECOND_ITEM_OFFSET, {
          toValue: -65,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.delay(4250),
        Animated.timing(SECOND_ITEM_OFFSET, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };
};
