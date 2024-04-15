import React, { useCallback } from 'react';
import { DeleteSweepIcon } from 'assets/icons';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { useDeleteAllInEdit } from 'hooks/store/SelectedCurrencies/useDeleteAllInEdit';
import { selectedForEditStore } from 'store/valtio/selectedForEditStore';
import { triggerWarningHaptic } from 'utils';
import { useSnapshot } from 'valtio';

import { styles } from './RemoveSweep.styles';

export const RemoveSweep = () => {
  const { selectedCurrencies } = useSnapshot(selectedForEditStore);

  const deleteAllInEdit = useDeleteAllInEdit();

  const handlePress = useCallback(() => {
    deleteAllInEdit(selectedCurrencies);
    triggerWarningHaptic();
  }, [deleteAllInEdit, selectedCurrencies]);

  return (
    <ButtonWithIPadOSInteraction
      onPress={handlePress}
      containerStyle={styles.container}
      hitSlop={5}>
      <DeleteSweepIcon size={24} />
    </ButtonWithIPadOSInteraction>
  );
};
