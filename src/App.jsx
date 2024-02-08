import React from 'react';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import { Outlet, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
    <ToastContainer />


  </>




};

export default App;
