import React, { FC, useState, useEffect } from 'react';
import './Switch.css';

export interface SwitchProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  checked?: boolean;
  color?: 'default' | string;
  labelPlacement?: 'bottom' | 'end';
  onChange?: (checked: boolean) => void;
}

const Switch: FC<SwitchProps> = ({
  label,
  size = 'medium',
  color = 'default',
  checked,
  labelPlacement = 'end',
  onChange,
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState(checked ?? false);

  useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleChange = () => {
    const newChecked = !internalChecked;
    setInternalChecked(newChecked);
    onChange?.(newChecked);
  };

  const baseColor = color === 'default' ? '#828181ff' : color;

  const switchClassList = ['switch-container'];

  if (labelPlacement === 'bottom') {
    switchClassList.push('switch-column');
  } else {
    switchClassList.push('switch-row');
  }

  return (
    <div style={{ position: 'static' }}>
      <div className={switchClassList.join(' ')} {...props}>
        <label className={`switch switch-${size}`}>
          <input
            type="checkbox"
            checked={internalChecked}
            onChange={handleChange}
          />
          <span
            className={`slider slider-${size} switch-${size}`}
            style={{ color: baseColor }}
          ></span>
        </label>
        {label && <span>{label}</span>}
      </div>
    </div>
  );
};

export default Switch;
