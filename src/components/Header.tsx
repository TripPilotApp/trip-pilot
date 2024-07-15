import logo from '../assets/Icons/white-logo.png';
import { ModalContext } from './modal/ModalProvider';
import { useContext} from 'react';
import MenuModal from './modal/MenuModal';
import AuthMenu from './modal/AuthMenu';
import Menu from './Menu';

const Header = () => {
    const { showModal, openModal, closeModal } = useContext(ModalContext);

    return (
        <header className="size-full h-64 p-2 flex justify-center bg-cover">
            <nav className="size-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className='flex items-center'>
                        <img className="w-14 h-14" src={logo} alt="Logo" />
                        <h1 className='text-3xl font-sora font-bold text-white'>TripPilot</h1>
                    </div>
                    <button
                        onClick={() => openModal('menuModal')}
                        type="button"
                        className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-hamburger"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
            </nav>
            {
                showModal.menuModal && (
                    // TODO: add conditional for if logged in:
                    // <MenuModal isVisible={showModal.menuModal} onClose={() => closeModal('menuModal')}>
                    //     <Menu />
                    // </MenuModal>

                    // if not logged in:
                    <MenuModal isVisible={showModal.menuModal} onClose={() => closeModal('menuModal')}>
                        <AuthMenu />
                    </MenuModal>
                )
            }
        </header>
    );
};

export default Header;
