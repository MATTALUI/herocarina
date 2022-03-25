import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TestPage from './components/TestPage';
import Navbar from './components/Navbar';

const App: React.FC = (): React.ReactElement => (
  <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element ={<LandingPage />} />
        <Route path="/test" element ={<TestPage />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
