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
      className="mx-10 lg:mx-28 bg-white top-0 left-0 z-50 flex justify-center items-center rounded-md"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col">
        <div className="rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
