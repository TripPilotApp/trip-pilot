import React, { useContext } from 'react';
import { ModalContext } from './modal/ModalProvider';
import Modal from './modal/Modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const MainContent: React.FC = () => {
  const { showModal, openModal, closeModal } = useContext(ModalContext);

  return (
    <div className="mx-auto p-4 bg-blue bg-opacity-75">
      <nav className="mb-4">
        <button onClick={() => openModal('loginModal')} className="mr-4 text-blue underline">
          Login
        </button>
        <button onClick={() => openModal('signUpModal')} className="text-blue underline">
          Sign Up
        </button>
      </nav>
      <h1 className="text-2xl text-blue font-bold underline mb-4">TripPilot</h1>

      {showModal.loginModal && (
        <Modal isVisible={showModal.loginModal} onClose={() => closeModal('loginModal')}>
          <LoginForm />
        </Modal>
      )}
      {showModal.signUpModal && (
        <Modal isVisible={showModal.signUpModal} onClose={() => closeModal('signUpModal')}>
          <SignUpForm />
        </Modal>
      )}
    </div>
  );
};

export default MainContent;
