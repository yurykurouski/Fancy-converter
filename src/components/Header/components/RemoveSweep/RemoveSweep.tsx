import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DeleteSweepIcon } from 'assets/icons';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { useClearSelectedCurrenciesInEdit } from 'hooks/store/SelectedCurrencies';
import { useDeleteAllInEdit } from 'hooks/store/SelectedCurrencies/useDeleteAllInEdit';
import { selectSelectedInEdit } from 'store/selectedForEdit/selectors';
import { triggerWarningHaptic } from 'utils';

import { styles } from './RemoveSweep.styles';

export const RemoveSweep = () => {
  const { selectedCurrencies } = useSelector(selectSelectedInEdit);

  const clearSelectedCurrenciesInEdit = useClearSelectedCurrenciesInEdit();
  const deleteAllInEdit = useDeleteAllInEdit();

  const handlePress = useCallback(() => {
    clearSelectedCurrenciesInEdit();

    deleteAllInEdit(selectedCurrencies);
    triggerWarningHaptic();
  }, [clearSelectedCurrenciesInEdit, deleteAllInEdit, selectedCurrencies]);

  return (
    <ButtonWithIPadOSInteraction
      onPress={handlePress}
      containerStyle={styles.container}
      hitSlop={5}>
      <DeleteSweepIcon size={24} />
    </ButtonWithIPadOSInteraction>
  );
};
