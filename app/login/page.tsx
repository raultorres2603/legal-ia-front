'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/hooks/useTheme';
import { LoginFormData, LoginErrors, LoginResponse } from '@/types/LoginTypes';
import { LoginInputField } from '@/components/InputField';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { API_URL } from '../../config/config';

const initialFormData: LoginFormData = {
  email: '',
  password: ''
};

export default function Login() {
  const { isLoading } = useTheme();
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>(initialFormData);
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tech-blue"></div>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const newErrors: LoginErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'email no válido';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof LoginErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Email: formData.email,
          Password: formData.password
        })
      });

      const result = await response.json();

      console.log('response', result);


      if (response.ok && result.token) {
        // Store token
        if (rememberMe) {
          localStorage.setItem('token', result.token);
        } else {
          sessionStorage.setItem('token', result.token);
        }

        // Store user info
        if (result.user) {
          localStorage.setItem('user', JSON.stringify(result.user));
        }

        // Redirect to dashboard
        // router.push('/');
      } else {
        setErrors({
          general: result.message || 'Error al iniciar sesión'
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({
        general: 'Error de conexión. Inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary">

      {/* Header */}
      <header className="bg-secondary border-b border-primary p-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="p-2">
                <Image src="/logo.png" alt="LegalIA Logo" width={48} height={48} />
              </div>
              <div>
                <h1 className="text-primary text-xl font-bold">LegalIA</h1>
                <p className="text-muted text-xs">Iniciar Sesión</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4 ">
              <Link
                href="/register"
                className="text-corporate-gray transition-colors font-medium p-2 rounded-md"
              >
                <div className="flex items-center space-x-2 border-b border-transparent hover:border-gray-400 transition-all duration-500 ease-in-out cursor-pointer">
                  <ArrowLeft className='w-4 h-4' />
                  <span>Crear cuenta</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">

          {/* Welcome Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-2">
              Bienvenido
            </h2>
            <p className="text-secondary">
              Accede a tu cuenta de LegalIA para continuar
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-8 border border-primary shadow-xl">

            {/* General Error */}
            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2 text-red-600">
                  <span>❌</span>
                  <span className="text-sm font-medium">{errors.general}</span>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <LoginInputField
                label="Email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                error={errors.email}
                required
                onChange={handleInputChange}
              />

              <LoginInputField
                label="Contraseña"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                error={errors.password}
                required
                onChange={handleInputChange}
              />

              {/* Remember Me & Forgot password */}
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-tech-blue hover:underline font-medium"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                w-full flex justify-center py-3 px-4 
                border border-transparent rounded-lg 
                shadow-sm font-bold transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                ${isSubmitting
                    ? 'bg-gray-400 text-gray-600 opacity-50 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 cursor-pointer'
                  }
                `}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Iniciando sesión...</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span>Iniciar Sesión</span>
                  </div>
                )}
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-muted">
                ¿No tienes una cuenta?{' '}
                <Link
                  href="/register"
                  className="text-tech-blue hover:underline font-semibold"
                >
                  Regístrate
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}