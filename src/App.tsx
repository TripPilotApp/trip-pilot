import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalProvider } from './components/modal/ModalProvider';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <Router>
        <LandingPage />
      </Router>
    </ModalProvider>
  );
};

export default App;
