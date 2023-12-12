import { DEFAULT_API_URL } from '@env';

import { requests } from './requests';

class CurrenciesService {
  async getDailyCourses() {
    try {
      return await requests.get(DEFAULT_API_URL);
    } catch (err) {
      //TODO: add error handling
      throw new Error(err as string);
    }
  }
}

export const currenciesService = new CurrenciesService();
