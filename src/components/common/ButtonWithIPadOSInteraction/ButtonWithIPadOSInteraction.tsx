import React from 'react';
import {
  Insets,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { PointerInteractionView } from '@thefunbots/react-native-pointer-interactions';
import { useAndroidRippleConfig } from 'hooks';
import { isAndroid, isIos } from 'utils';

type TProps = PressableProps & {
  children: JSX.Element | JSX.Element[];
  containerStyle?: StyleProp<ViewStyle>;
  hitSlop?: number | Insets;
};

export const ButtonWithIPadOSInteraction = React.memo(
  ({ children, containerStyle, onPress, hitSlop = 0, ...rest }: TProps) => {
    const rippleConfig = useAndroidRippleConfig();

    const hitSlops =
      typeof hitSlop === 'number'
        ? {
            top: hitSlop,
            left: hitSlop,
            bottom: hitSlop,
            right: hitSlop,
          }
        : hitSlop;

    return (
      <Pressable
        hitSlop={hitSlops}
        style={isAndroid ? containerStyle : undefined}
        onPress={onPress}
        android_ripple={rippleConfig}
        {...rest}>
        {isIos ? (
          <PointerInteractionView
            pointerMode="highlight"
            style={containerStyle}>
            {children}
          </PointerInteractionView>
        ) : (
          children
        )}
      </Pressable>
    );
  },
);
