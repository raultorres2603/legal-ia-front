/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RegisterResponse {
  Success: boolean;
  Message: string | null;
  Data: {
    userId: string;
  } | null;
  json: any
}