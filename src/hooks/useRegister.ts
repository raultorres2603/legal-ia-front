import { RegisterResponse } from "@/types/RegisterResponse";
import { useState } from "react";
import { postRegister } from '@/services/authService';


export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (formData: FormData): Promise<RegisterResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await postRegister(formData);

      const result = await response.json();

      if (!result.Success) {
        setError(result.Message || 'Error desconocido en el registro');
        throw new Error(result.Message || 'Error en el registro');
      }

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error de conexión';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};

/**
 * Helper function for manage the succes response
 * @param response The response of the register request
 * @returns The userId if the registration is successful, otherwise null
 */
export const handleSuccessfulRegistration = (response: RegisterResponse) => {
  if (response.Success && response.Data) {
    // Logic like as: save token in localStorage, redirect another page, show success mesage...

    console.log('Usuario registrado exitosamente:', response.Data.userId);


    localStorage.setItem('userId', response.Data.userId);

    return response.Data.userId;
  }
  return null;
};