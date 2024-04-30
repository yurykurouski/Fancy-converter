import React, { useCallback, useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { THEME_COLORS } from 'assets/colors';
import { CancelButton } from 'components/common/CancelButton';
import { l } from 'resources/localization';
import { colorSchemeStore } from 'store/colorSchemeStore';
import {
  selectedCurrenciesActions,
  selectedCurrenciesStore,
} from 'store/selectedCurrenciesStore';
import { triggerSelectionHaptic } from 'utils';
import { useSnapshot } from 'valtio';

import { useHandleTextChange } from './SearchField.hooks';

import { useStyles } from './SearchField.styles';

export const SearchField = () => {
  const [isFocused, setIsFocused] = useState(false);

  const { colorScheme } = useSnapshot(colorSchemeStore);
  const { searchValue, activeCurrencyType } = useSnapshot(
    selectedCurrenciesStore,
  );

  const styles = useStyles();

  const handleTextChange = useHandleTextChange(
    selectedCurrenciesActions.setFilteredCurrencies,
    activeCurrencyType,
  );

  const handleChange = (value: string) => {
    handleTextChange(value);
    selectedCurrenciesActions.searchCurrenciesValue(value);
  };

  const setFocus = useCallback(() => {
    if (!isFocused) {
      setIsFocused(true);
      triggerSelectionHaptic();
    }
  }, [isFocused]);
  const unsetFocus = useCallback(() => setIsFocused(false), []);

  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidHide', unsetFocus);

    return () => listener.remove();
  }, [isFocused, unsetFocus]);

  useEffect(() => {
    handleTextChange(searchValue);
  }, [handleTextChange, searchValue]);

  return (
    <View style={styles.inputContainer}>
      <View style={[styles.inputWrapper, isFocused && styles.inputFocused]}>
        <BottomSheetTextInput
          value={searchValue}
          onChangeText={handleChange}
          style={styles.input}
          maxLength={25}
          caretHidden={!isFocused}
          onBlur={unsetFocus}
          onFocus={setFocus}
          onPressOut={setFocus}
          placeholder={l['currency_search.input.placeholder']}
          placeholderTextColor={THEME_COLORS[colorScheme!].FONT_COLOR_FADED}
          keyboardAppearance={colorScheme!}
          inputMode="search"
          returnKeyLabel={l['currency_search.input.placeholder']}
          contextMenuHidden
          autoCorrect={false}
        />
        {!!searchValue && (
          <CancelButton
            onPress={handleChange}
            additionalStyle={styles.cancelBtn}
          />
        )}
      </View>
    </View>
  );
};
