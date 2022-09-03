import React, { useContext } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import CloseIconDark from 'assets/icons/close_black_24dp.svg';
import CloseIconLight from 'assets/icons/close_white_24dp.svg';
import { OnChangeTextHandler } from 'components/CurrencyInputValue/CurrencyInputValue.types';
import { ThemeContext } from 'context/ThemeProvider';

import { useStyles } from './CancelButton.styles';

type Props = {
  onPress: OnChangeTextHandler;
  size?: number;
  additionalStyle?: StyleProp<ViewStyle>;
};

export const CancelButton: React.FC<Props> = ({
  onPress,
  size = 24,
  additionalStyle,
}) => {
  const { colorScheme } = useContext(ThemeContext);
  const styles = useStyles(size);

  return (
    <TouchableOpacity
      onPressOut={() => onPress('')}
      style={[styles.buttonWrapper, additionalStyle]}>
      {colorScheme === 'dark' ? (
        <CloseIconLight width={size} height={size} />
      ) : (
        <CloseIconDark width={size} height={size} />
      )}
    </TouchableOpacity>
  );
};
