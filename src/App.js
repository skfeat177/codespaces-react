import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Appbar';
import Home from './screens/Home';
import Signup from './screens/Signup';
import QuizDashboard from './screens/QuizDashboard';
import EasyQuiz from './screens/EasyQuiz';
import MediumQuiz from './screens/MediumQuiz';
import HardQuiz from './screens/HardQuiz';
import Profile from './screens/Profile';
import Wallet from './screens/Wallet';
import Redeem from './screens/Reedem';
import Signin from './screens/Signin'
import Blog from './screens/Blog'
import Update from './screens/Update'
import UpdateDetail from './screens/UpdateDetail'
import Terms from './screens/Terms'
import Privacy from './screens/Privacy'

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes >

        <Route path="/" element={<Home />} index   />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign in" element={<Signin />} />
        <Route path="/redeem" element={<Redeem />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/easyquiz" element={<EasyQuiz />} />
        <Route path="/mediumquiz" element={<MediumQuiz />} />
        <Route path="/hardquiz" element={<HardQuiz />} />
        <Route path="/play quiz" element={<QuizDashboard />} />
        <Route path="/sign up" element={<Signup />} />
        <Route path="/updates" element={<Update />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/updatedetail/:date/:subject/:message" element={<UpdateDetail />} />


      </Routes>


    </BrowserRouter>
  );
}

export default App;
