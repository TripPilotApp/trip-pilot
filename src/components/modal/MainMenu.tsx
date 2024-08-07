import { useContext } from "react";
import { ModalContext } from "./ModalProvider";

interface MainMenuProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MainMenuProps> = ({ setLoggedIn }) => {

  const { closeModal } = useContext(ModalContext);

  const handleLogOut = () => {
    setLoggedIn(false);
    closeModal('menuModal')
  }

  return (
    <div className="flex justify-center items-center">
      <div className="inline-flex flex-col justify-center items-center form-card border-bg">
        <h1 className="font-bold text-white text-xl lg:text-2xl font-sora leading-none md:leading-normal lg:leading-loose mr-2 -mt-4">
          Menu
        </h1>
        <ul className="text-white">
          {/* TODO: update with relevant linking/functionality */}
          <li className="text-lg lg:text-xl font-semibold leading-snug mb-2 cursor-pointer">Home</li>
          <li className="text-lg lg:text-xl font-semibold leading-snug mb-2 cursor-pointer">Past Trips</li>
          <li className="text-lg lg:text-xl font-semibold leading-snug mb-2 cursor-pointer">Notifications</li>
          <li className="text-lg lg:text-xl font-semibold leading-snug mb-2 cursor-pointer">Add Friend</li>
          {/* Not included in mock ups, but would the log out option go here? */}
          <li
            className="text-lg lg:text-xl font-semibold leading-snug mb-2 cursor-pointer"
            onClick={handleLogOut}  
          >Log Out</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
