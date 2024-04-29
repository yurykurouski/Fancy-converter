import { getCurrencies } from 'react-native-localize';
import { EAvailableFiatNames } from 'types';

export const getInitCurrencies = () => {
  const currs = getCurrencies();

  return currs.reduce((acc, currName: string) => {
    //@ts-expect-error
    if (EAvailableFiatNames[currName]) {
      return {
        ...acc,
        [currName]: '',
      };
    } else {
      return acc;
    }
  }, {} as { [key in EAvailableFiatNames]: string });
};
