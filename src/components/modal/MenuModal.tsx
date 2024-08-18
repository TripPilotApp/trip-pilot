import React, { useEffect } from 'react';

interface ModalProps extends React.HTMLProps<HTMLDivElement> {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MenuModal: React.FC<ModalProps> = ({ isVisible, onClose, children, ...props }) => {
  useEffect(() => {
    if (isVisible) {
      // Focus the modal when it opens
      const focusableElements = document.querySelectorAll(
        '.modal-content, .modal-content *'
      );

      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [isVisible]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'wrapper' || (e.target as HTMLDivElement).id === 'close-button') onClose();
  };
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div
        id="close-button"
        className="z-10 absolute top-4 right-4 inline-flex items-center justify-center p-2 w-10 h-10 text-4xl text-white rounded-lg transition-all hover:text-5xl focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:ring-gray-700 dark:focus:ring-gray-600 cursor-pointer"
        onClick={handleClose}
        aria-label='Close modal'
      >
        &times;
      </div>
      <div
        {...props}
        className="absolute inset-0 bg-blue bg-opacity-90 flex items-center justify-center"
        id="wrapper"
        onClick={handleClose}
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
};

export default MenuModal;
