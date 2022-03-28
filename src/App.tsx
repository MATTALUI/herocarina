import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TestPage from './components/TestPage';
import Navbar from './components/Navbar';
import FourOhFour from './components/FourOhFour';
import FollowPage from './components/FollowPage';

const App: React.FC = (): React.ReactElement => (
  <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element ={<LandingPage />} />
        <Route path="/test" element ={<TestPage />} />
        <Route path="/follow" element={<FollowPage/>} />
        <Route path="*" element={<FourOhFour/>}/>
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
