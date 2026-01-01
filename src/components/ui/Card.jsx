import React from 'react';
import clsx from 'clsx';

const Card = ({
  children,
  hover = false,
  className,
  ...props
}) => {
  const baseClasses = clsx(
    'bg-amethyst border border-grey p-6',
    'transition-all duration-300',
    'clip-angled',
    'rim-light-cyan'
  );

  const hoverClasses = hover && clsx(
    'hover:border-transparent',
    'relative overflow-hidden',
    'before:absolute before:inset-0 before:p-[2px] before:rounded-none',
    'before:bg-gradient-to-r before:from-amber before:to-cyan',
    'before:opacity-0 hover:before:opacity-100',
    'before:transition-opacity before:duration-300',
    'before:-z-10',
    'hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]'
  );

  return (
    <div
      className={clsx(
        baseClasses,
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
