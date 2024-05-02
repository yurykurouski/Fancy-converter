import React from 'react';
import { Insets, StyleProp, ViewStyle } from 'react-native';
import { PointerInteractionView } from '@thefunbots/react-native-pointer-interactions';
import { BaseButtonProps, RectButton } from 'react-native-gesture-handler';
import { THEME_COLORS } from 'assets/colors';
import { colorSchemeStore } from 'store/colorSchemeStore';
import { isAndroid, isIos } from 'utils';
import { useSnapshot } from 'valtio';

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
    const { colorScheme } = useSnapshot(colorSchemeStore);

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
        rippleColor={
          withRipple
            ? THEME_COLORS[colorScheme!].APP_BACKGROUND_PRIMARY
            : undefined
        }
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
