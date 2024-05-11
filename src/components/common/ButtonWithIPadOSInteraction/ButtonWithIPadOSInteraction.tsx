import React from 'react';
import { Insets, StyleProp, ViewStyle } from 'react-native';
import { PointerInteractionView } from '@thefunbots/react-native-pointer-interactions';
import { BaseButtonProps, RectButton } from 'react-native-gesture-handler';
import { Colors } from 'assets/colors';
import { isAndroid, isIos } from 'utils';

type TProps = BaseButtonProps & {
  children: JSX.Element | JSX.Element[];
  containerStyle?: StyleProp<ViewStyle>;
  hitSlop?: number | Insets;
  withRipple?: boolean;
};

export const ButtonWithIPadOSInteraction = React.memo(
  ({
    children,
    containerStyle,
    onPress,
    hitSlop = 0,
    withRipple = true,
    ...rest
  }: TProps) => {
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
      <RectButton
        hitSlop={hitSlops}
        style={isAndroid ? containerStyle : undefined}
        onPress={onPress}
        rippleColor={withRipple ? Colors?.APP_BACKGROUND_PRIMARY : undefined}
        activeOpacity={0}
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
      </RectButton>
    );
  },
);
