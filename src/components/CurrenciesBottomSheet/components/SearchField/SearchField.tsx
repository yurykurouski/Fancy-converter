import React, { FC, useEffect, useState } from 'react';
import { Animated, Keyboard, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLORS } from 'assets/colors';
import { CancelButton } from 'components/common/CancelButton';
import { l } from 'resources/localization';
import { selectColorSchemeState } from 'store/colorScheme/selectors';

import { animatedPosition } from '../../CurrenciesBottomSheet.utils';

import { useHandleTextChange } from './SearchField.hooks';
import { Props } from './SearchField.types';

import { useStyles } from './SearchField.styles';

export const SearchField: FC<Props> = ({
  setAvaliableCurrencies,
  setIsCalculatingValue,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const { colorScheme } = useSelector(selectColorSchemeState);

  const styles = useStyles();

  const handleTextChange = useHandleTextChange({
    setAvaliableCurrencies,
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
    <Animated.View
      style={[
        styles.inputContainer,
        { transform: [{ translateY: animatedPosition }] },
      ]}>
      <View style={[styles.inputWrapper, isFocused && styles.inputFocused]}>
        <TextInput
          value={searchValue}
          onChangeText={handleChange}
          style={styles.input}
          maxLength={30}
          caretHidden={!isFocused}
          onBlur={() => setIsFocused(false)}
          onPressOut={() => setIsFocused(true)}
          placeholder={l['currency_search.input.placeholder']}
          placeholderTextColor={THEME_COLORS[colorScheme].FONT_COLOR_FADED}
          contextMenuHidden
        />
        {!!searchValue && (
          <CancelButton
            onPress={handleChange}
            additionalStyle={{ marginHorizontal: 10 }}
          />
        )}
      </View>
    </Animated.View>
  );
};
