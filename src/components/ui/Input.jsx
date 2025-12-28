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
    'bg-cosmic-navy border-2 border-ultron-cyan-dark',
    'text-starlight-white font-body',
    'px-4 py-3 w-full',
    'focus:outline-none focus:border-infinity-gold',
    'focus:shadow-[0_0_15px_rgba(255,157,0,0.4)]',
    'transition-all duration-300',
    'placeholder:text-faded-silver'
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
