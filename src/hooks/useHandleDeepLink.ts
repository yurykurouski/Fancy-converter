import { useEffect } from 'react';
import { Linking } from 'react-native';
import { TUseHandleDeepLinkProps } from 'types';

import { useSetFocusedCurrencyName } from './store/FocusedCurrency';
import { useHandleActiveCurrLink } from './useHandleActiveCurrLink';

export const useHandleDeepLink = ({
  currencies,
  inputsRefs,
}: TUseHandleDeepLinkProps) => {
  const setFocusedCurrencyName = useSetFocusedCurrencyName();

  const handleActiveCurrLink = useHandleActiveCurrLink(currencies, inputsRefs);

  const getInitialURL = async () => {
    return await Linking.getInitialURL();
  };

  useEffect(() => {
    Linking.addEventListener('url', value => handleActiveCurrLink(value.url));

    getInitialURL().then(handleActiveCurrLink);
  }, [currencies, handleActiveCurrLink, inputsRefs, setFocusedCurrencyName]);
};
