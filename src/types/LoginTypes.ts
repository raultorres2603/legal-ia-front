/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginErrors {
  email?: string;
  password?: string;
  general?: string;
}

export interface LoginResponse extends Body {
  success: boolean;
  token?: string;
  ok?: boolean;
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: number;
  };
  message?: string;
}