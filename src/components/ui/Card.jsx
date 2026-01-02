import React from 'react';
import clsx from 'clsx';

const Card = ({
  children,
  hover = false,
  as: Component = 'div',
  className,
  ...props
}) => {
  const isInteractive = hover || Component === 'button' || Component === 'a' || props.onClick || props.tabIndex === 0;

  const baseClasses = clsx(
    'bg-amethyst border border-indigo-dark p-6',
    'transition-all duration-300',
    'clip-angled',
    'rim-light-cyan',
    'hover-lift',
    isInteractive && 'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-indigo'
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
    <Component
      className={clsx(
        baseClasses,
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
