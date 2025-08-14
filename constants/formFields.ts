import { FormStep } from '@/types/Form';

export const FORM_STEPS: FormStep[] = [
  {
    number: 1,
    title: 'Datos Personales',
    description: 'Información básica del usuario'
  },
  {
    number: 2,
    title: 'Datos Empresariales',
    description: 'Información de la empresa'
  },
  {
    number: 3,
    title: 'Ubicación',
    description: 'Dirección y contacto'
  }
];

export const PERSONAL_FIELDS = [
  {
    name: 'firstName' as const,
    label: 'Nombre',
    placeholder: 'Tu nombre',
    required: true,
  },
  {
    name: 'lastName' as const,
    label: 'Apellido',
    placeholder: 'Tu apellido',
    required: true,
  },
  {
    name: 'email' as const,
    label: 'Email',
    type: 'email' as const,
    placeholder: 'tu@email.com',
    required: true,
  },
  {
    name: 'password' as const,
    label: 'Contraseña',
    type: 'password' as const,
    placeholder: 'Contraseña',
    required: true,
    description: 'Mínimo 8 caracteres, debe incluir mayúsculas, minúsculas y números'
  },
  {
    name: 'confirmPassword' as const,
    label: 'Confirmar Contraseña',
    type: 'password' as const,
    placeholder: 'Confirmar Contraseña',
    required: true,
    description: 'Debe coincidir con la contraseña anterior'
  },
  {
    name: 'dni' as const,
    label: 'DNI',
    placeholder: '12345678A',
    required: true,
    description: 'Documento Nacional de Identidad'
  },
  {
    name: 'phone' as const,
    label: 'Teléfono',
    type: 'tel' as const,
    placeholder: '+34 600 123 456',
    required: true,
  }
];

export const BUSINESS_FIELDS = [
  {
    name: 'businessName' as const,
    label: 'Nombre de la Empresa',
    placeholder: 'Bufete Legal García & Asociados',
    required: true,
  },
  {
    name: 'cif' as const,
    label: 'CIF',
    placeholder: 'B12345678',
    required: true,
    description: 'Código de Identificación Fiscal de tu empresa'
  }
];

export const LOCATION_FIELDS = [
  {
    name: 'address' as const,
    label: 'Dirección',
    placeholder: 'Calle Gran Vía, 123, 2º A',
    required: true,
  },
  {
    name: 'postalCode' as const,
    label: 'Código Postal',
    placeholder: '28013',
    required: true,
  },
  {
    name: 'city' as const,
    label: 'Ciudad',
    placeholder: 'Madrid',
    required: true,
  },
  {
    name: 'province' as const,
    label: 'Provincia',
    placeholder: 'Madrid',
    required: true,
  }
];