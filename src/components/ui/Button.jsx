import React from 'react';
import clsx from 'clsx';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  className,
  ...props
}) => {
  const baseClasses = 'font-heading font-bold transition-all duration-300 border';

  const variantClasses = {
    primary: clsx(
      'bg-gradient-to-r from-infinity-gold to-infinity-gold-light',
      'text-cosmic-navy border-infinity-gold',
      'hover:shadow-[0_0_20px_rgba(255,157,0,0.6)]',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none'
    ),
    secondary: clsx(
      'bg-transparent border-2 border-ultron-cyan',
      'text-ultron-cyan',
      'hover:bg-ultron-cyan hover:text-cosmic-navy',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-ultron-cyan'
    ),
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
