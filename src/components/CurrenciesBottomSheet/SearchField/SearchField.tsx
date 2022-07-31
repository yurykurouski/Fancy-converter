import React, {
  Dispatch,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Keyboard, Pressable, TextInput, View } from 'react-native';
import { CancelButton } from 'components/common/CancelButton';
import { ThemeContext } from 'context';
import { currencies } from 'resources/avaliable-currencies.json';

import { useStyles } from './SearchField.styles';

type Props = {
  setAvaliableCurrencies: Dispatch<React.SetStateAction<string[]>>;
};

export const SearchField: React.FC<Props> = ({ setAvaliableCurrencies }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const styles = useStyles();
  const { themeColors } = useContext(ThemeContext);

  const handleTextChange = useCallback(
    value => {
      setSearchValue(value);

      if (!value) {
        return setAvaliableCurrencies(currencies);
      }

      const filteredCurrencies = currencies.filter(el =>
        el.toLowerCase().includes(value.toLowerCase()),
      );

      setAvaliableCurrencies(filteredCurrencies);
    },
    [setAvaliableCurrencies],
  );

  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidHide', () => {
      setIsFocused(false);
    });

    return () => listener.remove();
  }, [isFocused]);

  return (
    <View style={styles.inputContainer}>
      <Pressable
        onPress={() => setIsFocused(true)}
        style={[styles.inputWrapper, isFocused && styles.inputFocused]}>
        <TextInput
          value={searchValue}
          onChangeText={handleTextChange}
          style={styles.input}
          maxLength={30}
          caretHidden={!isFocused}
          onBlur={() => setIsFocused(false)}
          onPressIn={() => setIsFocused(true)}
          placeholder="Filter by currency code"
          placeholderTextColor={themeColors.FONT_COLOR_FADED}
        />
        {!!searchValue && <CancelButton onPress={handleTextChange} />}
      </Pressable>
    </View>
  );
};
