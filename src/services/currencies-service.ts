import { requests } from './requests';

class CurrenciesService {
  async getDailyCourses() {
    try {
      return await requests.get();
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const currenciesService = new CurrenciesService();
