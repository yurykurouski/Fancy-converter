import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { DeleteSweepIcon } from 'assets/icons';
import { useAndroidRippleConfig, useSetSelectedCurrencies } from 'hooks';
import {
  useClearSelectedCurrenciesInEdit,
  useSetSelectedCurrEditMode,
} from 'hooks/store/SelectedCurrencies';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { AvailableCurrenciesNames } from 'types';
import { removeDuplicates } from 'utils';

import { styles } from './RemoveSweep.styles';

export const RemoveSweep = () => {
  const { selectedCurrenciesInEdit, selectedCurrencies } = useSelector(
    selectSelectedCurrencies,
  );

  const clearSelectedCurrenciesInEdit = useClearSelectedCurrenciesInEdit();
  const setSelectedCurrencies = useSetSelectedCurrencies();
  const setEditMode = useSetSelectedCurrEditMode();

  const rippleConfig = useAndroidRippleConfig();

  const onAllRemovePress = useCallback(() => {
    const filtered = removeDuplicates<AvailableCurrenciesNames>(
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
    <Pressable
      onPress={onAllRemovePress}
      style={styles.container}
      hitSlop={5}
      android_ripple={rippleConfig}>
      <DeleteSweepIcon size={24} />
    </Pressable>
  );
};
