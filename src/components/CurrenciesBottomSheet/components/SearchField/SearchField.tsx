import React, { FC, useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { useSelector } from 'react-redux';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { THEME_COLORS } from 'assets/colors';
import { CancelButton } from 'components/common/CancelButton';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { useHandleTextChange } from './SearchField.hooks';
import { Props } from './SearchField.types';

import { useStyles } from './SearchField.styles';

export const SearchField: FC<Props> = ({
  setAvailableCurrencies,
  setIsCalculatingValue,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const { colorScheme } = useSelector(selectColorSchemeState);

  const styles = useStyles();

  const handleTextChange = useHandleTextChange({
    setAvailableCurrencies,
    setIsCalculatingValue,
  });

  const handleChange = (value: string) => {
    setSearchValue(value);
    setIsCalculatingValue(true);
    handleTextChange(value);
  };

  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidHide', () => {
      setIsFocused(false);
    });

    return () => listener.remove();
  }, [isFocused]);

  return (
    <View style={styles.inputContainer}>
      <View style={[styles.inputWrapper, isFocused && styles.inputFocused]}>
        <BottomSheetTextInput
          value={searchValue}
          onChangeText={handleChange}
          style={styles.input}
          maxLength={25}
          caretHidden={!isFocused}
          onBlur={() => setIsFocused(false)}
          onPressOut={() => setIsFocused(true)}
          placeholder={l['currency_search.input.placeholder']}
          placeholderTextColor={THEME_COLORS[colorScheme!].FONT_COLOR_FADED}
          keyboardAppearance={colorScheme!}
          contextMenuHidden
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
