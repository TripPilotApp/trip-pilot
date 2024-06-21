// import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-500 underline">Login</Link>
          <Link to="/signup" className="text-blue-500 underline">Sign Up</Link>
        </nav>
        <h1 className="text-2xl text-blue-500 font-bold underline mb-4">TripPilot</h1>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

