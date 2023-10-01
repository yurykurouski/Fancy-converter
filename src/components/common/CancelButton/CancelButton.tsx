import React, { forwardRef } from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { useSelector } from 'react-redux';
import CloseIconDark from 'assets/icons/close_black_24dp.svg';
import CloseIconLight from 'assets/icons/close_white_24dp.svg';
import { OnChangeTextHandler } from 'components/CurrencyInputValue/CurrencyInputValue.types';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { useStyles } from './CancelButton.styles';

type TProps = {
  onPress?: OnChangeTextHandler;
  size?: number;
  additionalStyle?: StyleProp<ViewStyle>;
  pointerEvents?: PressableProps['pointerEvents'];
};

export const CancelButton = forwardRef<View, TProps>(
  ({ onPress, size = 24, additionalStyle, pointerEvents = 'auto' }, ref) => {
    const { colorScheme } = useSelector(selectColorSchemeState);
    const styles = useStyles(size);

    return (
      <Pressable
        ref={ref}
        pointerEvents={pointerEvents}
        onPressOut={() => onPress?.('')}
        style={[styles.buttonWrapper, additionalStyle]}>
        {colorScheme === 'dark' ? (
          <CloseIconLight width={size} height={size} />
        ) : (
          <CloseIconDark width={size} height={size} />
        )}
      </Pressable>
    );
  },
);
