import React, { FC, useState } from 'react';
import './Switch.css';

export interface SwitchProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  checked?: boolean;
  color?: 'deafault' | string;
  labelPlacement?: 'bottom' | 'end';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  const baseColor = color === 'default' || color === undefined ? '#828181ff' : color;

  const switchClassList = ['switch-container', `switch-${size}`];

  if (labelPlacement === 'bottom') {
    switchClassList.push('switch-column');
  } else {
    switchClassList.push('switch-row');
  }

  return (
    <div
      className={switchClassList.join(' ')}
    >
      <label className={`switch `}>
        <input
          type="checkbox"
          checked={checked ?? internalChecked}
          onChange={handleChange}
          {...props}
        />
        <span
          className={`slider slider-${size} switch-${size}`}
          style={{ color: baseColor }}
        ></span>
      </label>
      {label && <span>{label}</span>}
    </div>
  );
};

export default Switch;
