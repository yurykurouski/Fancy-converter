import { AvailableCryptoNames, AvailableFiatNames, ECurrencyType } from 'types';

const availableFiatNames = Object.values(AvailableFiatNames).sort();
const availableCryptoNames = Object.values(AvailableCryptoNames).sort();

export default {
  [ECurrencyType.FIAT]: availableFiatNames,
  [ECurrencyType.CRYPTO]: availableCryptoNames,
};
