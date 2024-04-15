import React, { useCallback } from 'react';
import { DeleteSweepIcon } from 'assets/icons';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { selectedCurrenciesActions } from 'store/selectedCurrenciesStore';
import { selectedForEditStore } from 'store/selectedForEditStore';
import { triggerWarningHaptic } from 'utils';
import { useSnapshot } from 'valtio';

import { styles } from './RemoveSweep.styles';

export const RemoveSweep = () => {
  const { selectedCurrencies } = useSnapshot(selectedForEditStore);

  const handlePress = useCallback(() => {
    selectedCurrenciesActions.deleteAllSelected(selectedCurrencies);
    triggerWarningHaptic();
  }, [selectedCurrencies]);

  return (
    <ButtonWithIPadOSInteraction
      onPress={handlePress}
      containerStyle={styles.container}
      hitSlop={5}>
      <DeleteSweepIcon size={24} />
    </ButtonWithIPadOSInteraction>
  );
};
