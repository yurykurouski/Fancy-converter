import React from 'react';
import { TouchableOpacity } from 'react-native';

import CloseIconDark from '../../../assets/icons/close_black_24dp';
import CloseIconLight from '../../../assets/icons/close_white_24dp';
import { getCurrentColorTheme } from '../../../utils/getCurrentColorTheme';
import { styles } from './CancelButton.styles';

type Props = {
  onPress: (text: any) => void;
};

export const CancelButton: React.FC<Props> = ({ onPress }) => {
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
