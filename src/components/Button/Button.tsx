// src/components/Button/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary' }) => {
  const className = variant === 'primary' ? styles.button : `${styles.button} ${styles.secondary}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;