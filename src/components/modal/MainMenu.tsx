import { useContext } from "react";
import { ModalContext } from "./ModalProvider";
import logo from '../../assets/icons/logo-light.png';
import HomeIcon from '@/assets/icons/home-icon.svg?react';
import PlaneIcon from '@/assets/icons/plane-icon.svg?react';
import HistoryIcon from '@/assets/icons/history-icon.svg?react';
import NotificationsIcon from '@/assets/icons/notifications-icon.svg?react';
import friendsIcon from '../../assets/icons/friends-light.png';
import logoutIcon from '../../assets/icons/logout-light.png';
import SupportIcon from '@/assets/icons/support-icon.svg?react';

interface MainMenuProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MainMenuProps> = ({ setLoggedIn }) => {

  const { closeModal } = useContext(ModalContext);

  const handleLogOut = () => {
    setLoggedIn(false);
    closeModal('menuModal');
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="inline-flex flex-col justify-between items-center form-card border-bg h-full p-4">
        <div className="flex justify-between items-center mb-8">
          <img className="w-14 h-14" src={logo} alt="TripPilot Logo" />
          <h1 className="text-white font-sora text-3xl font-bold mt-2">TripPilot</h1>
        </div>
        <nav 
          className="flex flex-col justify-between h-full pt-24"
          aria-label="Menu options"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <div className="flex items-center mb-4 rounded-xl px-3 py-2 w-60 text-white hover:text-dark-black hover:shadow-3xl hover:bg-white cursor-pointer">
                <HomeIcon className="w-6 h-6" />
                  <button 
                    // LINK TO HOME PAGE 
                    className="ml-2 rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3"
                    aria-label="Home"
                  >
                    Home
                  </button>
                </div>
                <div className="flex items-center mb-4 rounded-xl px-3 py-2 w-60 text-white hover:text-dark-black hover:shadow-3xl hover:bg-white cursor-pointer">
                  <PlaneIcon className="w-6 h-6"/>
                  <button 
                    // LINK TO UPCOMING TRIPS
                    className="ml-2 rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3"
                    aria-label="Upcoming trips"
                  >
                    Upcoming Trips
                  </button>
                </div>
              <div className="flex items-center mb-4 rounded-xl px-3 py-2 w-60 text-white hover:text-dark-black hover:shadow-3xl hover:bg-white cursor-pointer">
                <HistoryIcon className="w-6 h-6" />
                <button 
                  // LINK TO PAST TRIPS PAGE
                  className="ml-2 rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3"
                  aria-label="Past trips"
                >
                  Past Trips
                </button>
              </div>
              <div className="flex items-center mb-4 rounded-xl px-3 py-2 w-60 text-white hover:text-dark-black hover:shadow-3xl hover:bg-white cursor-pointer">
                <NotificationsIcon className="w-6 h-6" />
                <button 
                  // LINK TO NOTIFICATIONS PAGE
                  className="ml-2 rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3"
                  aria-label="Notifications"
                >
                  Notifications
                </button>
              </div>
              <div className="flex items-center mb-4 rounded-xl px-3 py-2 w-60 text-white hover:text-dark-black hover:shadow-3xl hover:bg-white cursor-pointer">
                <img className="w-6 h-6" src={friendsIcon} alt="Add friends icon" />
                <button
                  // LINK TO ADD FRIENDS PAGE 
                  className="ml-2 rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3"
                  aria-label="Add friends"
                >
                  Add Friends
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-4 rounded-xl px-3 py-2 w-60 text-white hover:text-dark-black hover:shadow-3xl hover:bg-white cursor-pointer">
                <img className="w-6 h-6" src={logoutIcon} alt="Log out icon" />
                <button
                  onClick={handleLogOut}
                  className="ml-2 rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3"
                  aria-label="Log out"
                >
                  Log Out
                </button>
              </div>
              <div className="flex items-center mb-4 rounded-xl px-3 py-2 w-60 text-white hover:text-dark-black hover:shadow-3xl hover:bg-white cursor-pointer">
                <SupportIcon className="w-6 h-6" />
                <button 
                  // LINK TO SUPPORT PAGE
                  className="ml-2 rounded-lg py-3 px-6 text-md font-sora font-semibold leading-3"
                  aria-label="Support"
                >
                  Support
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
