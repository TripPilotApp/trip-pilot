import React, { createContext, useState } from 'react';

interface ModalContextProps {
  showModal: { [key: string]: boolean };
  openModal: (modal: string) => void;
  closeModal: (modal: string) => void;
  auth: string;
  setToken: (token: string) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  showModal: { loginModal: false, signUpModal: false },
  openModal: () => {},
  closeModal: () => {},
  auth: '',
  setToken: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState({
    loginModal: false,
    signUpModal: false,
  });
  const [auth, setAuth] = useState<string>('');

  const setToken = (token: string) => setAuth(token);

  const openModal = (modal: string) => {
    setShowModal((prevState) => ({
      ...prevState,
      [modal]: true,
    }));
  };

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
    auth,
    setToken,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
