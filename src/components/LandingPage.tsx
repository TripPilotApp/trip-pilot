import React, { useState } from 'react';
import Header from './Header.tsx';

const LandingPage: React.FC = () => {

  const [ loggedIn, setLoggedIn ] = useState(false)
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
