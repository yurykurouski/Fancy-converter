import { DEFAULT_API_DAY_RATES } from '@env';

import { requests } from './requests';

class CurrenciesService {
  async getDailyCourses() {
    try {
      return await requests.get(DEFAULT_API_DAY_RATES);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const currenciesService = new CurrenciesService();
