import React, { useState } from 'react';
// import { ModalContext } from './ModalProvider';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';
import home from '../../assets/Icons/HomeIcon.svg';
import pastTrip from '../../assets/Icons/PastTripsIcon.svg';
import logo from '../../assets/Icons/white-logo.png';
import SupportIcon from '../../assets/Icons/SupportIcon.svg';
// import BackButton from './BackButton'; // Assuming BackButton component exists

const AuthMenu: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'login' | 'signup' | null>(null);

  const handleOpenForm = (form: 'login' | 'signup' | null) => {
    setActiveForm(form);
  };

  const handleBack = () => {
    setActiveForm(null); // Reset activeForm to null to show navigation content
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
          <div className="relative w-full flex items-center mb-6">
            <div className="flex items-center bg-white rounded-xl px-3 py-2 w-60 shadow-3xl cursor-pointer">
              <img className="w-6 h-6" src={home} alt="login" />
              <button onClick={() => handleOpenForm('login')} className="ml-2 text-dark-black bg-white rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3">
                Login
              </button>
            </div>
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
          <div onClick={handleBack}>Back</div> {/* Back button to return to navigation */}
          <div className="w-80 mt-20">
            <LoginForm setActiveForm={setActiveForm}/>
          </div>
        </>
      )}
      {activeForm === 'signup' && (
        <>
          <div onClick={handleBack}>Back</div> {/* Back button to return to navigation */}
          <div className="w-80 mt-20">
            <SignUpForm setActiveForm={setActiveForm}/>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthMenu;
