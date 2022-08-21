import React, { useContext, useEffect, useState } from 'react';
import { Animated, Keyboard, TextInput, View } from 'react-native';
import { CancelButton } from 'components/common/CancelButton';
import { ThemeContext } from 'context';
import { currencies } from 'resources/avaliable-currencies.json';
import { l } from 'resources/localization';

import { animatedPosition } from '../../CurrenciesBottomSheet.utils';

import { useHandleTextChange } from './SearchField.hooks';
import { Props } from './SearchField.types';

import { useStyles } from './SearchField.styles';

export const SearchField: React.FC<Props> = ({
  setAvaliableCurrencies,
  setSearchValue,
  searchValue,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const styles = useStyles();
  const { themeColors } = useContext(ThemeContext);

  const handleTextChange = useHandleTextChange({
    setSearchValue,
    setAvaliableCurrencies,
    currencies,
  });

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
          onChangeText={handleTextChange}
          style={styles.input}
          maxLength={30}
          caretHidden={!isFocused}
          onBlur={() => setIsFocused(false)}
          onPressOut={() => setIsFocused(true)}
          placeholder={l['currency_search.input.placeholder']}
          placeholderTextColor={themeColors.FONT_COLOR_FADED}
        />
        {!!searchValue && <CancelButton onPress={handleTextChange} />}
      </View>
    </Animated.View>
  );
};
