import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from './ModalProvider';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const MainContent: React.FC = () => {
  const { showModal, openModal, closeModal } = useContext(ModalContext);

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <button onClick={() => openModal('loginModal')} className="mr-4 text-blue-500 underline">
          Login
        </button>
        <button onClick={() => openModal('signUpModal')} className="text-blue-500 underline">
          Sign Up
        </button>
      </nav>
      <h1 className="text-2xl text-blue-500 font-bold underline mb-4">TripPilot</h1>

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
