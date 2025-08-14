export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dni: string;
  cif: string;
  businessName: string;
  address: string;
  postalCode: string;
  city: string;
  province: string;
  phone: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  dni?: string;
  cif?: string;
  businessName?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  province?: string;
  phone?: string;
}

export interface InputFieldProps {
  label: string;
  name: keyof FormData;
  type?: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  value: string;
  error?: string;
  required?: boolean;
  description?: string;
  icon?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface FormStep {
  number: number;
  title: string;
  description?: string;
}
