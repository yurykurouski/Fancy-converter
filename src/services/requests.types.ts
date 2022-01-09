export interface RequestsInterface {
  get(url: string): object;
}

export type Response = (
  url: string,
  method: string,
  data?: string,
) => Promise<globalThis.Response>;
