import React from 'react';

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
  className = ''
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-primary text-2xl font-bold mb-2 flex items-center justify-center space-x-2">
          <span>{title}</span>
        </h2>
        {description && (
          <p className="text-secondary">{description}</p>
        )}
      </div>

      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};
