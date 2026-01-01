import React from 'react';
import clsx from 'clsx';

const Badge = ({
  children,
  variant = 'gold',
  className,
  ...props
}) => {
  const baseClasses = 'inline-block px-3 py-1 text-xs font-heading font-bold border';

  const variantClasses = {
    gold: 'bg-amber/20 border-amber text-gold',
    cyan: 'bg-cyan/20 border-cyan text-cyan',
    red: 'bg-red/20 border-red text-red',
  };

  return (
    <span
      className={clsx(
        baseClasses,
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
