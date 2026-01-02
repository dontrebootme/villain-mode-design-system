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
  const baseClasses = 'font-heading font-bold uppercase tracking-[1.5px] transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-indigo';

  const variantClasses = {
    primary: clsx(
      'btn-gradient-primary',
      'text-midnight-indigo border-amber',
      'skew-button',
      'hover:glow-hot',
      'focus-visible:ring-amber',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none'
    ),
    secondary: clsx(
      'bg-transparent border-2 border-cyan',
      'text-cyan',
      'skew-button',
      'hover:bg-cyan hover:text-midnight-indigo',
      'focus-visible:ring-cyan',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-cyan'
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
      <span className="unskew-text">{children}</span>
    </button>
  );
};

export default Button;
