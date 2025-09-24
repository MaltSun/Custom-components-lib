import React, { FC, useState } from 'react';
import './TextField.css';

export interface TextFieldProps {
  label?: string;
  defaultValue?: string;
  error?: string;
  helperText?: string;
  variant?: 'standart' | 'filled' | 'outlined';
  type?: 'text' | 'password';
  required?: boolean;
  readonly?: boolean;
  options?: string[];
  disable?: boolean;
  onChange?: (value: string) => void;
}

const TextField: FC<TextFieldProps> = ({
  label: initialLabel,
  defaultValue: initialDefaultValue,
  error,
  variant = 'standart',
  helperText,
  type = 'text',
  required = false,
  readonly = false,
  disable = false,
  onChange,
}) => {
  const [label, setLabel] = useState(initialLabel ?? '');
  const [value, setValue] = useState(initialDefaultValue ?? '');
  const [focused, setFocused] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleFocus = () => {
    if (type === 'text') {
      if (!label && value) {
        setLabel(value);
        setValue('');
      }
    }
    setFocused(true);
  };

  const handleBlur = () => {
    if (!initialLabel && label && value === '') {
      setLabel('');
      setValue(initialDefaultValue ?? '');
    }
    setFocused(false);
  };

  const isActive = focused || Boolean(value);

  return (
    <div className={`textfield ${error ? 'error' : ''} ${variant}`}>
      {label && (
        <label
          className={`textfield-label ${variant} ${isActive ? 'active': ''}`}
        >
          {label} {required && '*'}
        </label>
      )}

      <input
        type={type}
        value={value}
        required={required}
        readOnly={readonly}
        className={`textfield-input ${variant} ${error ? 'error' : ''}`}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disable}
      />

      {helperText && (
        <p className={`textfield-helper ${variant}`}>{helperText}</p>
      )}
      {error && <p className="textfield-error">{error}</p>}
    </div>
  );
};

export default TextField;
