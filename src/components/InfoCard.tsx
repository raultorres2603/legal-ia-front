import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: string;
  type?: 'info' | 'warning' | 'success' | 'error';
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon,
  type = 'info',
  className = ''
}) => {
  const getCardStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200';
      default:
        return 'bg-tertiary border-gray-200 dark:border-gray-600 text-primary';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-600 dark:text-green-400';
      case 'warning':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'error':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-legal-gold';
    }
  };

  return (
    <div className={`p-6 rounded-lg border ${getCardStyles()} ${className}`}>
      <div className="flex items-start space-x-3">
        <span className={`text-2xl ${getIconColor()}`}>{icon}</span>
        <div>
          <h4 className="font-semibold mb-2">{title}</h4>
          <p className="text-sm leading-relaxed opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
};