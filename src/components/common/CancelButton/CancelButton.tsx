import React from 'react';
import { TouchableOpacity } from 'react-native';
import CloseIconDark from 'assets/icons/close_black_24dp.svg';
import CloseIconLight from 'assets/icons/close_white_24dp.svg';
import { OnChangeTextHandler } from 'components/CurrencyValue/CurrencyInputValue/CurrencyInputValue.types';
import { getCurrentColorTheme } from 'utils';

import { useStyles } from './CancelButton.styles';

type Props = {
  onPress: OnChangeTextHandler;
};

export const CancelButton: React.FC<Props> = ({ onPress }) => {
  const styles = useStyles();
  return (
    <TouchableOpacity onPress={() => onPress('')} style={styles.buttonWrapper}>
      {getCurrentColorTheme() === 'dark' ? (
        <CloseIconLight width={24} height={24} />
      ) : (
        <CloseIconDark width={24} height={24} />
      )}
    </TouchableOpacity>
  );
};
