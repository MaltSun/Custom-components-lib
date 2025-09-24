import React, { FC, useState, useRef, useEffect } from 'react';
import './CheckBox.css';

export interface CheckBoxProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  checked?: boolean;
  indeterminate?: boolean;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  labelPlacement?: 'bottom' | 'end';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<CheckBoxProps> = ({
  color = '#3e91cd',
  size = 'medium',
  checked,
  indeterminate = false,
  label,
  required = false,
  disabled = false,
  labelPlacement = 'end',
  onChange,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState(checked ?? false);
  const inputRef = useRef<HTMLInputElement>(null);

  const checkBoxStyle = ['checkBox'];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  if (disabled) {
    checkBoxStyle.push(`disabled`);
  }

  if (size) {
    checkBoxStyle.push(`checkBox-${size}`);
  }

  return (
    <div
      className={checkBoxStyle.join(' ')}
      style={{
        display: 'flex',
        flexDirection: labelPlacement === 'bottom' ? 'column' : 'row',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <input
        ref={inputRef}
        type="checkbox"
        checked={checked ?? internalChecked}
        disabled={disabled}
        onChange={handleChange}
        style={{ accentColor: color }}
        {...props}
      />
      {label && (
        <label>
          {label}
          {required ? ' *' : ''}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
