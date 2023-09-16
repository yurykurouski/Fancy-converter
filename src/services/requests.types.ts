export interface RequestsInterface {
  get(): object;
}

export type Response = (
  method: string,
  data?: string,
) => Promise<globalThis.Response>;
