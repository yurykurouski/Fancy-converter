import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DeleteSweepIcon } from 'assets/icons';
import { ButtonWithIPadOSInteraction } from 'components/common/ButtonWithIPadOSInteraction';
import { useSetSelectedCurrencies } from 'hooks';
import {
  useClearSelectedCurrenciesInEdit,
  useSetSelectedCurrEditMode,
} from 'hooks/store/SelectedCurrencies';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { AvailableFiatNames } from 'types';
import { removeDuplicates } from 'utils';

import { styles } from './RemoveSweep.styles';

export const RemoveSweep = () => {
  const { selectedCurrenciesInEdit, selectedCurrencies } = useSelector(
    selectSelectedCurrencies,
  );

  const clearSelectedCurrenciesInEdit = useClearSelectedCurrenciesInEdit();
  const setSelectedCurrencies = useSetSelectedCurrencies();
  const setEditMode = useSetSelectedCurrEditMode();

  const onAllRemovePress = useCallback(() => {
    const filtered = removeDuplicates<AvailableFiatNames>(
      selectedCurrencies,
      selectedCurrenciesInEdit,
    );

    setSelectedCurrencies(filtered);
    clearSelectedCurrenciesInEdit(undefined);
    setEditMode(false);
  }, [
    clearSelectedCurrenciesInEdit,
    selectedCurrencies,
    selectedCurrenciesInEdit,
    setEditMode,
    setSelectedCurrencies,
  ]);

  return (
    <ButtonWithIPadOSInteraction
      onPress={onAllRemovePress}
      containerStyle={styles.container}
      hitSlop={5}>
      <DeleteSweepIcon size={24} />
    </ButtonWithIPadOSInteraction>
  );
};
