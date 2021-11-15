export interface RequestsInterface {
  get(url: string): {};
}

export type Response = (
  url: string,
  method: string,
  data?: string,
) => Promise<any>;
