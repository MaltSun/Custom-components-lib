import React, { FC } from 'react';
import './Button.css';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  color?: string;
  background?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  color,
  size,
  variant,
  background,
  onClick,
  ...props
}) => {
  const classList = ['defButton'];

  if (size) {
    classList.push(size);
  }

  if (variant) {
    classList.push(variant);
  }

  return (
    <button
      {...props}
      className={classList.join(' ')}
      style={{ color, background }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
