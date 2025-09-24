import React, { FC, useState } from 'react';
import './Modal.css';

export interface ModalProps {
  children?: React.ReactNode;
  openText: string;
}

const Modal: FC<ModalProps> = ({
  children,
  openText = 'open',
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div {...props}>
      <button className="openButton" onClick={() => setOpen(true)}>
        {openText}
      </button>

      <div className={`modal ${isOpen ? 'open' : 'close'}`}>
        <button className="closeButton" onClick={() => setOpen(false)}>
          x
        </button>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
