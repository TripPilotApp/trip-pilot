import React, { useEffect, useState } from 'react';
import Header from './Header.tsx';

const LandingPage: React.FC = () => {

  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    // Check for token on component mount
    const token = localStorage.getItem('token');
    console.log("token lookup: ", token)
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  
  return (
    <div className="landing-page">
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
    </div>
  );
};

export default LandingPage;
