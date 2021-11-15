import { REQUEST_GET, REQUEST_CT_APPLICATION_JSON } from '../contsants';
import { DEFAULT_API_URL } from 'react-native-dotenv';
import { RequestsInterface, Response } from './requests.types';

class Requests implements RequestsInterface {
  response: Response;

  constructor() {
    this.response = async (url, method, data) =>
      fetch(`${DEFAULT_API_URL}${url}`, {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': REQUEST_CT_APPLICATION_JSON,
        },
      });
  }

  async get(url: string) {
    try {
      const response = await this.response(url, REQUEST_GET);

      return response.json();
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export const requests = new Requests();
