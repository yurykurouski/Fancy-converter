import {
  EAvailableCryptoNames,
  EAvailableFiatNames,
  ECurrencyType,
} from 'types';

const AvailableFiatNames = Object.values(EAvailableFiatNames).sort();
const AvailableCryptoNames = Object.values(EAvailableCryptoNames).sort();

export default {
  [ECurrencyType.FIAT]: AvailableFiatNames,
  [ECurrencyType.CRYPTO]: AvailableCryptoNames,
};
