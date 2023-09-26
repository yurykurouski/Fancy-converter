import { requests } from './requests';

class CurrenciesService {
  async getDailyCourses() {
    try {
      return await requests.get();
    } catch (err) {
      //TODO: add error handling
      throw new Error(err as string);
    }
  }
}

export const currenciesService = new CurrenciesService();
