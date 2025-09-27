import React, { FC, useState } from 'react';
import './Select.css';

export interface SelectProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  variant?: 'standart' | 'filled' | 'outlined';
  required?: boolean;
  readonly?: boolean;
  options?: string[];
  disable?: boolean;
  error?: string;
}

const Select: FC<SelectProps> = ({
  label = '',
  placeholder = '',
  error,
  variant = 'standart',
  required = false,
  disable = false,
  helperText = '',
  options = [],
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const isActive = focused || value !== '';

  return (
    <div className={`select-container ${variant} `}>
      {label && (
        <label
          className={`select-label ${variant} ${isActive ? 'active' : ''} ${
            error ? 'error' : ''
          }`}
        >
          {label} {required && '*'}
        </label>
      )}

      <select
        className={`select ${variant} ${error ? 'error' : ''}`}
        required={required}
        disabled={disable}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <option value="" disabled >
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {helperText && (
        <span className={`select-helper ${variant}`}>{helperText}</span>
      )}

      {error && <span className={`error`}>{error}</span>}
    </div>
  );
};

export default Select;
