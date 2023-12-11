import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { THEME_COLORS } from 'assets/colors';
import { CancelButton } from 'components/common/CancelButton';
import { useSetFilteredCurrencies } from 'hooks/store/SelectedCurrencies';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/colorScheme/selectors';
import { selectSelectedCurrencies } from 'store/selectedCurrencies/selectors';
import { SelectedCurrenciesActions } from 'store/selectedCurrencies/slices/SelectedCurrenciesSlice';

import { useHandleTextChange } from './SearchField.hooks';

import { useStyles } from './SearchField.styles';

export const SearchField = () => {
  const [isFocused, setIsFocused] = useState(false);

  const ref = useRef();

  const dispatch = useDispatch();

  const { colorScheme } = useSelector(selectColorSchemeState);
  const { searchValue, activeCurrencyType } = useSelector(
    selectSelectedCurrencies,
  );

  const setFilteredCurrencies = useSetFilteredCurrencies();

  const styles = useStyles();

  const handleTextChange = useHandleTextChange(
    setFilteredCurrencies,
    activeCurrencyType,
  );

  const handleChange = (value: string) => {
    handleTextChange(value);
    dispatch(SelectedCurrenciesActions.searchCurrenciesValue(value));
  };

  const setFocus = useCallback(() => setIsFocused(true), []);
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
          //@ts-expect-error
          ref={ref}
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
