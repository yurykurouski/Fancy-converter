import { REQUEST_CT_APPLICATION_JSON, REQUEST_GET } from 'constants/index';

import { RequestsInterface, Response } from './requests.types';

class Requests implements RequestsInterface {
  response: Response;

  constructor() {
    this.response = async (method, url, data) =>
      await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': REQUEST_CT_APPLICATION_JSON,
        },
      });
  }

  async get(url: string) {
    try {
      return this.response(REQUEST_GET, url).then(response => response.json());
    } catch (err) {
      throw new Error(err as string);
    }
  }
}

export const requests = new Requests();
