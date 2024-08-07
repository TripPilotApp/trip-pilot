import React, { useState } from 'react';
// import { ModalContext } from './ModalProvider';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';
import home from '../../assets/icons/home-icon.svg';
import pastTrip from '../../assets/icons/past-trips-icon.svg';
import logo from '../../assets/icons/white-logo.png';
import SupportIcon from '../../assets/icons/support-icon.svg';
// import BackButton from './BackButton'; // Assuming BackButton component exists

interface AuthMenuProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthMenu: React.FC<AuthMenuProps> = ({ setLoggedIn }) => {
  const [activeForm, setActiveForm] = useState<'login' | 'signup' | null>(null);

  const handleOpenForm = (form: 'login' | 'signup' | null) => {
    setActiveForm(form);
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-row mb-3 mt-5">
        <div className="flex justify-between">
          <img className="w-14 h-14" src={logo} alt="Logo" />
          <h1 className="text-white font-sora text-3xl font-bold mt-2">TripPilot</h1>
        </div>
      </div>

      {/* Conditional rendering based on activeForm */}
      {!activeForm && (
        <nav className="flex flex-col items-center mt-24">
            <div className="flex items-center mb-4 bg-white rounded-xl px-3 py-2 w-60 shadow-3xl cursor-pointer">
              <img className="w-6 h-6" src={home} alt="login" />
              <button onClick={() => handleOpenForm('login')} className="ml-2 text-dark-black bg-white rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3">
                Login
              </button>
            </div>
          <div className="flex items-center mb-4 bg-white rounded-xl px-3 py-2 w-60 shadow-3xl cursor-pointer">
            <img className="w-6 h-6" src={pastTrip} alt="Register" />
            <button onClick={() => handleOpenForm('signup')} className="ml-2 text-dark-black bg-white rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3">
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
      )}

      {/* Conditional rendering of forms based on activeForm */}
      {activeForm === 'login' && (
        <>
          <div className="w-80 mt-20">
            <LoginForm setActiveForm={setActiveForm} setLoggedIn={setLoggedIn}/>
          </div>
        </>
      )}
      {activeForm === 'signup' && (
        <>
          <div className="w-80 mt-20">
            <SignUpForm setActiveForm={setActiveForm}/>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthMenu;
