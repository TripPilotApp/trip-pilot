import logo from '@/assets/icons/logo-light.png';
import { ModalContext } from './modal/ModalProvider';
import React, { useContext } from 'react';
import MenuModal from './modal/MenuModal';
import AuthMenu from './modal/AuthMenu';
import MainMenu from './modal/MainMenu';

interface HeaderProps {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ loggedIn, setLoggedIn }) => {
    const { showModal, openModal, closeModal } = useContext(ModalContext);

    return (
        <header className="size-full h-64 p-2 flex justify-center bg-cover">
            <nav className="size-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className='flex items-center'>
                        <img className="w-14 h-14" src={logo} alt="TripPilot Logo" />
                        <h1 className='text-3xl font-sora font-bold text-white'>TripPilot</h1>
                    </div>
                    <button
                        onClick={() => openModal('menuModal')}
                        type="button"
                        className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:outline focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="menuModal"
                        aria-expanded={showModal.menuModal}
                        aria-label="Open main menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
            </nav>
            {
                showModal.menuModal && (
                    <MenuModal 
                        isVisible={showModal.menuModal} 
                        onClose={() => closeModal('menuModal')}
                        role="dialog"
                        aria-modal="true"
                    >
                        {loggedIn ? 
                        <MainMenu 
                            setLoggedIn={setLoggedIn}
                            aria-labelledby="main-menu"
                        />
                        :
                        <AuthMenu 
                            setLoggedIn={setLoggedIn}
                            aria-labelledby="auth-menu"
                        />}
                    </MenuModal>
                )
            }
        </header>
    );
};

export default Header;
