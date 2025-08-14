'use client'

import React, { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import the components and interfaces
import { InputField } from '@/components/InputField';
import { FormSection } from '@/components/FormSection';
import { InfoCard } from '@/components/InfoCard';
import type { FormData, FormErrors } from '@/types/Form';
import {
  FORM_STEPS,
  PERSONAL_FIELDS,
  BUSINESS_FIELDS,
  LOCATION_FIELDS
} from '../../constants/formFields';
import { validateStep } from '@/utils/validation';
import { handleSuccessfulRegistration, useRegister } from '@/hooks/useRegister';

// const initialFormData: FormData = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
//   dni: '',
//   cif: '',
//   businessName: '',
//   address: '',
//   postalCode: '',
//   city: '',
//   province: '',
//   phone: ''
// };

const initialFormData: FormData = {
  firstName: 'María Carmen',
  lastName: 'García López',
  email: 'maria.garcia@bufetegalopez.com',
  password: 'password123',
  confirmPassword: 'password123',
  dni: '12345678A',
  cif: 'B87654321',
  businessName: 'Bufete García & López Asociados S.L.',
  address: 'Calle Gran Vía, 45, 3º Derecha',
  postalCode: '28013',
  city: 'Madrid',
  province: 'Madrid',
  phone: '+34 915 123 456'
};

export default function Register() {
  const { isLoading } = useTheme();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const { register } = useRegister();
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tech-blue"></div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clean errors when the user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Validation in time real for confirm password
    if (name === 'confirmPassword' || name === 'password') {
      // If we are editing confirmPassword, validate against the current password
      if (name === 'confirmPassword') {
        if (value && formData.password && value !== formData.password) {
          setErrors(prev => ({
            ...prev,
            confirmPassword: 'Las contraseñas no coinciden'
          }));
        } else {
          setErrors(prev => ({
            ...prev,
            confirmPassword: undefined
          }));
        }
      }

      // If we are editing password and already have something in confirmPassword, revalidate
      if (name === 'password') {
        if (formData.confirmPassword && value && formData.confirmPassword !== value) {
          setErrors(prev => ({
            ...prev,
            confirmPassword: 'Las contraseñas no coinciden'
          }));
        } else if (formData.confirmPassword && value && formData.confirmPassword === value) {
          setErrors(prev => ({
            ...prev,
            confirmPassword: undefined
          }));
        }
      }
    }
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep, formData);
    setErrors(stepErrors);

    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep(3, formData);
    setErrors(stepErrors);

    if (Object.keys(stepErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });
      const response = await register(formDataObj);
      const userId = handleSuccessfulRegistration(response);

      if (userId) {
        // Redirect to the success page
        router.push('/');
      }
    } catch (err) {
      // The errors is managed in hook
      console.error('Error en registro:', err);
    }
  }

  const renderPersonalFields = () => (
    <FormSection
      title="Datos Personales"
      description="Comencemos con tu información básica"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PERSONAL_FIELDS.slice(0, 2).map(field => (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            error={errors[field.name]}
            required={field.required}
            description={field.description}
            onChange={handleInputChange}
          />
        ))}
      </div>

      <InputField
        label={PERSONAL_FIELDS[2].label}
        name={PERSONAL_FIELDS[2].name}
        type={PERSONAL_FIELDS[2].type}
        placeholder={PERSONAL_FIELDS[2].placeholder}
        value={formData[PERSONAL_FIELDS[2].name]}
        error={errors[PERSONAL_FIELDS[2].name]}
        required={PERSONAL_FIELDS[2].required}
        onChange={handleInputChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PERSONAL_FIELDS.slice(3).map(field => (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            error={errors[field.name]}
            required={field.required}
            description={field.description}
            onChange={handleInputChange}
          />
        ))}
      </div>
    </FormSection>
  );

  const renderBusinessFields = () => (
    <FormSection
      title="Datos Empresariales"
      description="Información de tu empresa o bufete"
    >
      {BUSINESS_FIELDS.map(field => (
        <InputField
          key={field.name}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]}
          error={errors[field.name]}
          required={field.required}
          description={field.description}
          onChange={handleInputChange}
        />
      ))}

      <InfoCard
        title="¿Por qué necesitamos estos datos?"
        description="La información empresarial nos permite configurar tu cuenta corporativa, generar facturas correctamente y personalizar LegalIA según el tamaño y tipo de tu organización."
        icon="💼"
        type="info"
      />
    </FormSection>
  );

  const renderLocationFields = () => (
    <FormSection
      title="Ubicación"
      description="Dirección de tu empresa o bufete"
    >
      <InputField
        label={LOCATION_FIELDS[0].label}
        name={LOCATION_FIELDS[0].name}
        placeholder={LOCATION_FIELDS[0].placeholder}
        value={formData[LOCATION_FIELDS[0].name]}
        error={errors[LOCATION_FIELDS[0].name]}
        required={LOCATION_FIELDS[0].required}
        onChange={handleInputChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {LOCATION_FIELDS.slice(1, 3).map(field => (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            error={errors[field.name]}
            required={field.required}
            onChange={handleInputChange}
          />
        ))}
      </div>

      <InputField
        label={LOCATION_FIELDS[3].label}
        name={LOCATION_FIELDS[3].name}
        placeholder={LOCATION_FIELDS[3].placeholder}
        value={formData[LOCATION_FIELDS[3].name]}
        error={errors[LOCATION_FIELDS[3].name]}
        required={LOCATION_FIELDS[3].required}
        onChange={handleInputChange}
      />
    </FormSection>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-secondary border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="p-1">
                <Image src="/logo.png" alt="LegalIA Logo" width={48} height={48} />
              </Link>
              <div>
                <h1 className="text-primary text-xl font-bold">LegalIA</h1>
                <p className="text-muted text-xs">Registro de Usuario</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-corporate-gray transition-colors font-medium">
                <div className="flex items-center space-x-2 border-b border-transparent hover:border-gray-400 transition-all duration-500 ease-in-out cursor-pointer">
                  <ArrowLeft className='w-4 h-4' />
                  <span>
                    Volver al inicio
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-tertiary py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {FORM_STEPS.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center space-x-3 ${currentStep >= step.number
                  ? 'text-tech-blue'
                  : 'text-corporate-gray'
                  }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${currentStep >= step.number
                    ? 'bg-tech-blue text-white'
                    : 'bg-primary text-corporate-gray'
                    }`}>
                    {currentStep > step.number ? '✓' : step.number}
                  </div>
                  <div className="hidden sm:block">
                    <div className="font-medium">{step.title}</div>
                  </div>
                </div>
                {index < FORM_STEPS.length - 1 && (
                  <div className={`mx-4 h-1 w-16 sm:w-32 rounded-full ${currentStep > step.number
                    ? 'bg-tech-blue'
                    : 'bg-gray-200 dark:bg-gray-700'
                    }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-primary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Únete a la Revolución Legal
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Crea tu cuenta en LegalIA y transforma tu práctica legal con inteligencia artificial
          </p>
        </div>
      </section>

      {/* Form Section */}
      <main className="py-6">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">

            {/* Render current step */}
            {currentStep === 1 && renderPersonalFields()}
            {currentStep === 2 && renderBusinessFields()}
            {currentStep === 3 && renderLocationFields()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200 dark:border-gray-600">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${currentStep === 1
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-tertiary text-corporate-gray hover:bg-tertiary border border-gray-300 cursor-pointer'
                  }`}
              >
                <div className='flex items-center space-x-2 gap-1'>
                  <ArrowLeft className='w-4 h-4' />
                  Anterior
                </div>
              </button>

              <div className="text-center">
                <span className="text-muted text-sm">
                  Paso {currentStep} de {FORM_STEPS.length}
                </span>
              </div>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-tech-blue text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all  cursor-pointer"
                >
                  <div className='flex items-center space-x-2 gap-1'>
                    Siguiente
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-tech-blue text-white px-8 py-3 rounded-lg font-bold hover:shadow-legal transition-all disabled:opacity-50 disabled:cursor-not-allowed  cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Creando cuenta...</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <span>Crear cuenta</span>
                    </span>
                  )}
                </button>
              )}
            </div>

            {/* Terms */}
            <div className="text-center pt-6">
              <p className="text-muted text-sm">
                Al crear tu cuenta, aceptas nuestros{' '}
                <a href="#" className="text-tech-blue hover:underline">Términos de Servicio</a>{' '}
                y{' '}
                <a href="#" className="text-tech-blue hover:underline">Política de Privacidad</a>
              </p>
              <p className="text-muted text-sm">
                ¿Ya tienes cuenta? Inicia sesión{' '}
                <a href="/login" className="text-tech-blue hover:underline cursor-pointer">aqui</a>
              </p>
            </div>
          </form>

          {/* TODO: Improve colors */}
          {/* Benefits Sidebar */}
          {/* <div className="mt-12 bg-legal-gradient rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              ✨ Lo que obtienes con LegalIA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <h4 className="font-semibold mb-1">IA Especializada</h4>
                  <p className="text-sm opacity-90">Motor entrenado específicamente para análisis legal</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1">Resultados Inmediatos</h4>
                  <p className="text-sm opacity-90">Análisis completo en menos de 2 minutos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1">Seguridad Total</h4>
                  <p className="text-sm opacity-90">Encriptación militar y cumplimiento GDPR</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h4 className="font-semibold mb-1">ROI Garantizado</h4>
                  <p className="text-sm opacity-90">Reduce costos hasta 80% y aumenta productividad</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}