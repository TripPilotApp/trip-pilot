import React, { createContext, useState } from 'react';

interface ModalContextProps {
  showModal: { menuModal: boolean };
  openModal: (modal: string) => void;
  closeModal: (modal: string) => void;
  setToken: (token: string) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  showModal: { menuModal: false },
  openModal: () => {},
  closeModal: () => {},
  setToken: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState({
    menuModal: false,
  });

  const setToken = (token: string) => {
    localStorage.setItem('token', token);
  }

  const openModal = (modal: string) => {
    setShowModal((prevState) => ({
      ...prevState,
      [modal]: true,
    }));
  }

  const closeModal = (modal: string) => {
    setShowModal((prevState) => ({
      ...prevState,
      [modal]: false,
    }));
  };

  const value = {
    showModal,
    openModal,
    closeModal,
    setToken,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};