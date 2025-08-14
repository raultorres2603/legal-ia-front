/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestOptions } from "@/types/api";
import { API_URL } from "../../config/config";

const defaultHeaders = {
  "Content-Type": "application/json",
};

/**
 * API client for make requests to the server
 * @param endpoint The endpoint of the request
 * @param options The options of the request
 * @returns The response of the request
 * @throws Error if the request fails
 */
export default async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const token = "";

  const config: RequestInit = {
    method: options.method || "GET",
    headers: {
      ...defaultHeaders,
      ...options.headers,
      "Authorization": `Bearer ${token}`,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  };

  const res = await fetch(`${API_URL}${endpoint}`, config);
  const isJson = res.headers.get("content-type")?.includes("application/json");

  const data = isJson ? await res.json() : null;

  if (!res.ok) {
    const error = new Error(data?.message || "Error en la solicitud");
    (error as any).status = res.status;
    throw error;
  }

  return data;
}

export const apiClient = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, body?: Record<string, unknown>) => request<T>(url, { method: "POST", body }),
  patch: <T>(url: string, body?: Record<string, unknown>) => request<T>(url, { method: "PATCH", body }),
  delete: <T>(url: string) => request<T>(url, { method: "DELETE" }),
};
