import React from 'react';
import clsx from 'clsx';

const Input = ({
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  error = false,
  errorMessage,
  required = false,
  'aria-label': ariaLabel,
  ...props
}) => {
  const baseClasses = clsx(
    'bg-midnight-indigo border-2',
    error ? 'border-red' : 'border-cyan-dark',
    'text-white font-body',
    'px-4 py-3 w-full',
    'focus:outline-none focus:border-amber',
    'focus:shadow-[0_0_15px_rgba(245,166,35,0.4)]',
    'focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-indigo',
    'transition-all duration-300',
    'placeholder:text-silver'
  );

  const errorId = id ? `${id}-error` : undefined;

  return (
    <div className="w-full">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(baseClasses, className)}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error && errorId ? errorId : undefined}
        aria-required={required ? 'true' : undefined}
        aria-label={ariaLabel}
        {...props}
      />
      {error && errorMessage && (
        <p id={errorId} className="mt-2 text-sm text-red" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
