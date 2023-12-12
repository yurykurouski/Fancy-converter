export interface RequestsInterface {
  get(url: string): object;
}

export type Response = (
  method: string,
  url: string,
  data?: string,
) => Promise<globalThis.Response>;
