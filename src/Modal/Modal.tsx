import React, { FC, useState } from 'react';
import './Modal.css';

export interface ModalProps {
  children?: React.ReactNode;
  openText: string;
}

const Modal: FC<ModalProps> = ({ children, openText = 'open', ...props }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpenButton = () => {
    setOpen(true);
  };

  const handleCloseButton = () => {
    setOpen(false);
  };

  return (
    <div {...props}>
      <button className="openButton" onClick={handleOpenButton}>
        {openText}
      </button>
      <div className={`modal-container ${isOpen ? 'open' : 'close'}`}>
        <div className={`modal ${isOpen ? 'open' : 'close'}`}>
          <button className="closeButton" onClick={handleCloseButton}>
            x
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
