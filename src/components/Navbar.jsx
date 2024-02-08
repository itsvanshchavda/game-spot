import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";





const Navbar = () => {

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();



  const [nav, setNav] = useState(false)

  

  const handleLogin = () => {
    if (loginWithRedirect() && user) {
      toast.success('Login successful!', {
        autoClose: 5000,
      });

    }




  };
  const handleLogout = () => {
    logout();
    toast.success('Logout successful!', {
      autoClose: 5000,
    });
  };





  return (
    <section className='py-2 bg-[#353D62] pb-5 text-white cursor-pointer '>
      <Link to="/" className='text-3xl font-bold text-start px-28 relative top-7 max-sm:text-xl max-sm:top-1 max-sm:right-16 max-xl:right-20 max-xl:text-2xl max-xl:top-9 max-lg:text-xl'>
        Games Spot
      </Link>



      <div>
        <ul className='flex justify-end items-end gap-10 px-28 max-sm:hidden max-xl:gap-5 '>
          <li>
            <NavLink to='/' className={({ isActive }) => `text-lg font-semibold  ${isActive ? "text-[#5275ff]  border-b-2 duration-300" : "text-white"} `}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/genres' className={({ isActive }) => `text-lg font-semibold  ${isActive ? "text-[#5275ff] border-b-2 duration-300" : "text-white"} `}>
              Genres
            </NavLink>
          </li>
          <li>
            <NavLink to='/creators' className={({ isActive }) => `text-lg font-semibold  ${isActive ? "text-[#5275ff]  border-b-2 duration-300" : "text-white"} `}>Creators</NavLink>
          </li>

          {isAuthenticated ? (

            <div className="flex items-center">
              <div className="mr-4">
                <img src={user.picture} className="rounded-full h-10 w-10" alt="" />
              </div>
              <div>
                <p className="text-white font-bold">{user.name}</p>
                <button className="bg-[#262D4F] text-white relative py-1 px-7 rounded-md cursor-pointer" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <div>
              <button className="bg-[#262D4F] text-white py-1 px-6 rounded-md cursor-pointer" onClick={handleLogin}>Login</button>
            </div>
          )}




        </ul>
      </div>


      {/* Mobile Nav */}
      <div className='absolute'>
        <div className='cursor-pointer pr-4 relative left-[20em] bottom-4 z-10 text-gray-500 md:hidden' onClick={() => setNav(!nav)}>
          {nav ? <IoMdClose color='white' /> : <AiOutlineMenu color='white' />}
        </div>

      </div>

      {nav && (
        <div className={`px-20 ${nav ? 'menu-open' : 'menu-closed'}`}>
          <ul className='flex flex-col gap-5 justify-center items-center mt-5 font-bold'>
            <li>
              <NavLink to='/' onClick={() => setNav(!nav)} className={({ isActive }) => `text-lg font-semibold  ${isActive ? "text-[#5275ff] border-b-2 duration-300" : "text-white"} `}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/genres' onClick={() => setNav(!nav)} className={({ isActive }) => `text-lg font-semibold  ${isActive ? "text-[#5275ff]  border-b-2 duration-300" : "text-white"} `}>
                Genres
              </NavLink>
            </li>
            <li>
              <NavLink to='/creators' onClick={() => setNav(!nav)} className={({ isActive }) => `text-lg font-semibold  ${isActive ? "text-[#5275ff]  border-b-2 duration-300" : "text-white"} `}>
                Creators
              </NavLink>
            </li>
          </ul>
          <ul className='flex flex-row gap-5 justify-center items-center mt-2 font-bold'>

            <li>
              {isAuthenticated ? (
                <div className="flex items-center">
                  <div className="mr-4">
                    <img src={user.picture} className="rounded-full h-10 w-10" alt="" />
                  </div>

                  {isAuthenticated && (
                    <div>
                      <p className="text-white font-bold">{user.name}</p>
                      <button className="bg-[#262D4F] text-white relative  py-1 px-7 rounded-md cursor-pointer" onClick={(e) => logout()} >Logout</button>
                    </div>
                  )}

                </div>
              ) : (
                <div>
                  <button className="bg-[#262D4F] text-white py-1 px-6 rounded-md cursor-pointer" onClick={(e) => loginWithRedirect()}>Login</button>
                </div>
              )}


            </li>
          </ul>
        </div>
      )}

    </section>
  );
};

export default Navbar;
