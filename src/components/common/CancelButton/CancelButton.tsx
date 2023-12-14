import React, { forwardRef } from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { CloseIcon } from 'assets/icons';
import { OnChangeTextHandler } from 'components/CurrencyInputValue/CurrencyInputValue.types';

import { useStyles } from './CancelButton.styles';

type TProps = {
  onPress?: OnChangeTextHandler;
  size?: number;
  additionalStyle?: StyleProp<ViewStyle>;
  pointerEvents?: PressableProps['pointerEvents'];
};

export const CancelButton = forwardRef<View, TProps>(
  ({ onPress, size = 24, additionalStyle, pointerEvents = 'auto' }, ref) => {
    const styles = useStyles(size);

    return (
      <Pressable
        ref={ref}
        pointerEvents={pointerEvents}
        onPressOut={() => onPress?.('')}
        style={[styles.buttonWrapper, additionalStyle]}>
        <CloseIcon size={size} />
      </Pressable>
    );
  },
);
