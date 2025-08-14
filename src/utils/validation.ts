import { FormData, FormErrors } from '../types/Form';

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateDNI = (dni: string): boolean => {
  return /^[0-9]{8}[A-Za-z]$/.test(dni);
};

export const validateCIF = (cif: string): boolean => {
  return /^[A-Za-z][0-9]{8}$/.test(cif);
};

export const validatePhone = (phone: string): boolean => {
  return /^(\+34|0034|34)?[6-9][0-9]{8}$/.test(phone.replace(/\s/g, ''));
};

export const validatePostalCode = (code: string): boolean => {
  return /^[0-9]{5}$/.test(code);
};

export const validatePassword = (password: string): string | null => {
  if (!password.trim()) return 'La contraseña es obligatoria';
  if (password.length < 8) return 'La contraseña debe tener al menos 8 caracteres';
  if (!/(?=.*[a-z])/.test(password)) return 'La contraseña debe contener al menos una letra minúscula';
  if (!/(?=.*[A-Z])/.test(password)) return 'La contraseña debe contener al menos una letra mayúscula';
  if (!/(?=.*\d)/.test(password)) return 'La contraseña debe contener al menos un número';
  return null;
};

export const validatePasswordMatch = (password: string, confirmPassword: string): string | null => {
  if (!confirmPassword.trim()) return 'Debes confirmar la contraseña';
  if (password !== confirmPassword) return 'Las contraseñas no coinciden';
  return null;
};

export const validateStep = (step: number, formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (step === 1) {
    if (!formData.firstName.trim()) errors.firstName = 'El nombre es obligatorio';
    if (!formData.lastName.trim()) errors.lastName = 'El apellido es obligatorio';
    if (!formData.email.trim()) {
      errors.email = 'El email es obligatorio';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Email no válido';
    }

    // Password validation
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      errors.password = passwordError;
    }

    // Password confirmation validation
    const confirmPasswordError = validatePasswordMatch(formData.password, formData.confirmPassword);
    if (confirmPasswordError) {
      errors.confirmPassword = confirmPasswordError;
    }

    if (!formData.dni.trim()) {
      errors.dni = 'El DNI es obligatorio';
    } else if (!validateDNI(formData.dni)) {
      errors.dni = 'DNI no válido (formato: 12345678A)';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'El teléfono es obligatorio';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Teléfono no válido';
    }
  }

  if (step === 2) {
    if (!formData.businessName.trim()) errors.businessName = 'El nombre de empresa es obligatorio';
    if (!formData.cif.trim()) {
      errors.cif = 'El CIF es obligatorio';
    } else if (!validateCIF(formData.cif)) {
      errors.cif = 'CIF no válido (formato: B12345678)';
    }
  }

  if (step === 3) {
    if (!formData.address.trim()) errors.address = 'La dirección es obligatoria';
    if (!formData.postalCode.trim()) {
      errors.postalCode = 'El código postal es obligatorio';
    } else if (!validatePostalCode(formData.postalCode)) {
      errors.postalCode = 'Código postal no válido (5 dígitos)';
    }
    if (!formData.city.trim()) errors.city = 'La ciudad es obligatoria';
    if (!formData.province.trim()) errors.province = 'La provincia es obligatoria';
  }

  return errors;
};