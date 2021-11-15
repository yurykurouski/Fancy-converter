import { DEFAULT_API_CITY_REQUEST } from 'react-native-dotenv';
import { requests } from './requests';

class CurrenciesService {
  async getCoursesExchangeWithCity(cityName) {
    try {
      return await requests.get(`${DEFAULT_API_CITY_REQUEST}=${cityName}`);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const currenciesService = new CurrenciesService();
