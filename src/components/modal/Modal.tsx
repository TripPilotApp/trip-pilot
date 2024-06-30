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
      className="fixed inset-0 flex flex-col items-center bg-blue bg-opacity-75"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-80 bg-white rounded-lg mt-20">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
