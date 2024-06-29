import React from 'react';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'wrapper') onClose();
  };

  return (
    <div
      className="flex flex-col z-50"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-80 bg-white rounded-lg">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
