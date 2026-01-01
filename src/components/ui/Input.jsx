import React from 'react';
import clsx from 'clsx';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  ...props
}) => {
  const baseClasses = clsx(
    'bg-midnight-indigo border-2 border-cyan-dark',
    'text-white font-body',
    'px-4 py-3 w-full',
    'focus:outline-none focus:border-amber',
    'focus:shadow-[0_0_15px_rgba(245,166,35,0.4)]',
    'transition-all duration-300',
    'placeholder:text-silver'
  );

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={clsx(baseClasses, className)}
      {...props}
    />
  );
};

export default Input;
