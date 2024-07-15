const Menu: React.FC = () => {

  return (
    <div className="flex justify-center items-center">
      <div className="inline-flex flex-col justify-center items-center form-card border-bg">
        <h1 className="font-bold text-white text-xl lg:text-2xl font-sora leading-none md:leading-normal lg:leading-loose mr-2 -mt-4">
          Menu
        </h1>
        <ul className="text-white">
          <li className="text-lg lg:text-xl font-semibold leading-snug mb-2">Home</li>
          <li className="text-lg lg:text-xl font-semibold leading-snug mb-2">Past Trips</li>
          <li className="text-lg lg:text-xl font-semibold leading-snug mb-2">Notifications</li>
          <li className="text-lg lg:text-xl font-semibold leading-snug mb-2">Add Friend</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
