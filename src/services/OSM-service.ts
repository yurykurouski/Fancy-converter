import { OSM_API_URL } from '@env';

import { requests } from './requests';

class OSMService {
  async getCountryName(lat: number, lon: number) {
    try {
      return await requests.get(
        `${OSM_API_URL}lat=${lat}&lon=${lon}&format=jsonv2`,
      );
    } catch (err) {
      //TODO: add error handling
      throw new Error(err as string);
    }
  }
}

export const osmService = new OSMService();
