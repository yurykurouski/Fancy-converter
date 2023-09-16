import { DEFAULT_API_URL } from '@env';
import { REQUEST_CT_APPLICATION_JSON, REQUEST_GET } from 'constants/constants';

import { RequestsInterface, Response } from './requests.types';

class Requests implements RequestsInterface {
  response: Response;

  constructor() {
    this.response = async (method, data) =>
      await fetch(DEFAULT_API_URL, {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': REQUEST_CT_APPLICATION_JSON,
        },
      });
  }

  async get() {
    try {
      return this.response(REQUEST_GET).then(response => response.json());
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const requests = new Requests();
