import React from 'react';
import { DeleteSweepIcon } from 'assets/icons';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { useClearSelectedCurrenciesInEdit } from 'hooks/store/SelectedCurrencies';

import { styles } from './RemoveSweep.styles';

export const RemoveSweep = () => {
  const clearSelectedCurrenciesInEdit = useClearSelectedCurrenciesInEdit();

  return (
    <ButtonWithIPadOSInteraction
      //@ts-expect-error
      onPress={clearSelectedCurrenciesInEdit}
      containerStyle={styles.container}
      hitSlop={5}>
      <DeleteSweepIcon size={24} />
    </ButtonWithIPadOSInteraction>
  );
};
