import React, { useContext } from 'react';
import { ModalContext } from './modal/ModalProvider';
import Modal from './modal/Modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import home from '../assets/Icons/HomeIcon.svg';
import pastTrip from '../assets/Icons/PastTripsIcon.svg';
import logo from '../assets/Icons/white-logo.png';
import SupportIcon from '../assets/Icons/SupportIcon.svg';
import hand from "../assets/Icons/bi_hand-index.svg"

const MainContent: React.FC = () => {
  const { showModal, openModal, closeModal } = useContext(ModalContext);

  return (
    <div className="bg-blue bg-opacity-75 flex flex-col h-screen items-center">
      <div className="flex flex-row mb-3 mt-5">
        <div className="flex justify-between">
          <img className="w-14 h-14" src={logo} alt="Logo" />
          <h1 className="text-white font-sora text-3xl font-bold mt-2">TripPilot</h1>
        </div>
      </div>
      <nav className="flex flex-col items-center mt-24">
        {/* <img className="ml-60 w-6 h-5 -mb-16" src={hand} />
        <div className="flex items-center mb-4 bg-white rounded-xl px-3 py-2 w-60 shadow-3xl">
          <img className="w-6 h-6" src={home} alt="login" />
          <button onClick={() => openModal('loginModal')} className="ml-2 text-dark-black bg-white rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3">
            Login
          </button>
        </div> */}
        <div className="relative w-full flex items-center mb-6">
          <div className="flex items-center bg-white rounded-xl px-3 py-2 w-60 shadow-3xl cursor-pointer">
            <img className="w-6 h-6" src={home} alt="login" />
            <button onClick={() => openModal('loginModal')} className="ml-2 text-dark-black bg-white rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3">
              Login
            </button>
          </div>
          <img className="absolute -right-2 w-6 h-5 -mb-16" src={hand} />
        </div>
        <div className="flex items-center mb-4 bg-white rounded-xl px-3 py-2 w-60 shadow-3xl cursor-pointer">
          <img className="w-6 h-6" src={pastTrip} alt="Register" />
          <button onClick={() => openModal('signUpModal')} className="ml-2 text-dark-black bg-white rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3">
            Sign Up
          </button>
        </div>
        <div className="flex items-center mb-4 bg-white rounded-xl px-3 py-2 w-60 shadow-3xl cursor-pointer">
          <img className="w-6 h-6" src={SupportIcon} alt="support" />
          <button className="ml-2 text-dark-black bg-white rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3">
            Support
          </button>
        </div>
      </nav>
      {
        showModal.loginModal && (
          <Modal isVisible={showModal.loginModal} onClose={() => closeModal('loginModal')}>
            <LoginForm />
          </Modal>
        )
      }
      {
        showModal.signUpModal && (
          <Modal isVisible={showModal.signUpModal} onClose={() => closeModal('signUpModal')}>
            <SignUpForm />
          </Modal>
        )
      }
    </div >
  );
};

export default MainContent;
