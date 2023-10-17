import { AvailableCryptoNames, AvailableFiatNames, ECurrencyType } from 'types';

const AvailableFiatNames = Object.values(AvailableFiatNames).sort();
const availableCryptoNames = Object.values(AvailableCryptoNames).sort();

export default {
  [ECurrencyType.FIAT]: AvailableFiatNames,
  [ECurrencyType.CRYPTO]: availableCryptoNames,
};
