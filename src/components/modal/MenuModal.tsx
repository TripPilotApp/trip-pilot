import React from 'react';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MenuModal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'wrapper') onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute top-4 right-4 inline-flex items-center justify-center p-2 w-10 h-10 text-2xl text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleClose}
      >
        &times;
      </div>
      <div
        className="absolute inset-0 bg-blue bg-opacity-90 flex items-center justify-center"
        id="wrapper"
        onClick={handleClose}
      >
          {children}
      </div>
    </div>
  );
};

export default MenuModal;
