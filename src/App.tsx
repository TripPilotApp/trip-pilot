import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalProvider } from './components/ModalProvider';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <Router>
        <MainContent />
      </Router>
    </ModalProvider>
  );
};

export default App;
