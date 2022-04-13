import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UsePageTransitionPage from './pages/UseTransition';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UsePageTransitionPage />} />
      </Routes>
    </div>
  );
}

export default App;
