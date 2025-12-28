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
    gold: 'bg-infinity-gold/20 border-infinity-gold text-infinity-gold-light',
    cyan: 'bg-ultron-cyan/20 border-ultron-cyan text-ultron-cyan',
    red: 'bg-reality-red/20 border-reality-red text-reality-red',
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
