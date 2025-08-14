import { LoginResponse } from "@/types/LoginTypes";
import { apiClient } from "../../app/api/apiClient";
import { RegisterResponse } from "@/types/RegisterResponse";

/**
 * Service for login
 * @param data The data of the login request
 * @returns The response of the login request
 * @throws Error if the login fails
 */
export const postLogin = async (data: Record<string, unknown>): Promise<LoginResponse> => {
  return apiClient.post<LoginResponse>('/auth/login', data);
}

/**
 * Service for register
 * @param data The data of the register request
 * @returns The response of the register request
 * @throws Error if the register fails
 */
export const postRegister = async (data: FormData): Promise<RegisterResponse> => {
  const formDataObject: Record<string, unknown> = {};
  data.forEach((value, key) => {
    formDataObject[key] = value;
  });
  return apiClient.post<RegisterResponse>('/auth/register', formDataObject);
}
