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
  onChange?: (checked: boolean) => void; 
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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleChange = () => {
    if (disabled) return;

    const newChecked = !internalChecked; 
    setInternalChecked(newChecked);
    onChange?.(newChecked);
  };

  const checkBoxStyle = ['checkBox'];
  if (disabled) checkBoxStyle.push('disabled');
  if (size) checkBoxStyle.push(`checkBox-${size}`);

  return (
    <div
      className={checkBoxStyle.join(' ')}
      style={{
        display: 'flex',
        flexDirection: labelPlacement === 'bottom' ? 'column' : 'row',
        alignItems: 'center',
        gap: '8px',
      }}
      {...props}
    >
      <input
        ref={inputRef}
        type="checkbox"
        checked={internalChecked}
        required={required}
        disabled={disabled}
        onChange={handleChange}
        style={{ accentColor: color }}
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
