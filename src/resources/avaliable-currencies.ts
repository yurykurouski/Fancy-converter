import { AvailableCryptoNames, AvailableFlatNames, ECurrencyType } from 'types';

const availableFlatNames = Object.values(AvailableFlatNames).sort();
const availableCryptoNames = Object.values(AvailableCryptoNames).sort();

export default {
  [ECurrencyType.FLAT]: availableFlatNames,
  [ECurrencyType.CRYPTO]: availableCryptoNames,
};
