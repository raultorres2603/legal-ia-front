import React, { useState } from 'react';
import { InputFieldProps } from '../types/Form';
import { Eye, EyeOff } from 'lucide-react';

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  error,
  required = false,
  description,
  icon,
  onChange,
  className = ''
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-primary font-semibold mb-2">
        <div className="flex items-center space-x-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span>{label} {required && <span className="text-red-500">*</span>}</span>
        </div>
      </label>

      <div className="relative">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${error
            ? 'border-red-500 focus:border-red-500 bg-red-50 dark:bg-red-900/20'
            : 'border-gray-300 dark:border-gray-600 focus:border-tech-blue'
            } bg-primary text-primary placeholder-gray-400 dark:placeholder-gray-500 ${type === 'password' ? 'pr-12' : ''}`}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
          >
            {showPassword ? <EyeOff className='w-5 h-5 cursor-pointer' /> : <Eye className='w-5 h-5 cursor-pointer' />}
          </button>
        )}
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-red-500 text-sm mt-1">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {description && !error && (
        <p className="text-muted text-sm mt-1">{description}</p>
      )}
    </div>
  );
};

interface LoginInputFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value: string;
  error?: string;
  required?: boolean;
  icon?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginInputField: React.FC<LoginInputFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  error,
  required = false,
  icon,
  onChange
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-primary font-semibold mb-2">
        <div className="flex items-center space-x-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span>{label} {required && <span className="text-red-500">*</span>}</span>
        </div>
      </label>

      <div className="relative">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${error
            ? 'border-red-500 focus:border-red-500 bg-red-50 dark:bg-red-900/20'
            : 'border-gray-300 dark:border-gray-600 focus:border-tech-blue'
            } bg-primary text-primary placeholder-gray-400 dark:placeholder-gray-500`}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
          >
            {showPassword ? <EyeOff className='w-5 h-5 cursor-pointer' /> : <Eye className='w-5 h-5 cursor-pointer' />}
          </button>
        )}
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-red-500 text-sm mt-1">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};