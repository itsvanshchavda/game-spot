import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";





const Footer = () => {
  return <>
    <div className='bg-[#0E1947] py-10 '>
      <div className='w-full h-[20rem] shadow-blue-800 py-10 shadow-2xl rounded-2xl'>
        <h1 className='font-bold text-center text-2xl max-sm:text-xl text-white'>This site is using <a className='text-blue-500 cursor-pointer ' href='https://rawg.io/' target='_blank'>RAWG.io</a> API for fetching data </h1>
        <p className='text-white font-bold text-xl text-center py-9'>Created by <a className='text-blue-500' href='https://twitter.com/itsvanshchavda' target='_blank' >Vansh</a></p>
        <p className=' text-white text-[20px] text-center'>Connect with me :</p>
        <div className='flex gap-5 justify-center py-10 cursor-pointer'>
          <a href='https://twitter.com/itsvanshchavda' target='_blank' rel='noopener noreferrer'>
            <FaTwitter size={30} color='white' className='hover:scale-105' />
          </a>
          <a href='https://www.linkedin.com/in/vanshchavda07/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={30} color='white' className='hover:scale-105' />
          </a>
          <a href='https://github.com/itsvanshchavda' target='_blank' rel='noopener noreferrer'>
            <FaGithubSquare size={30} color='white' className='hover:scale-105' />
          </a>
        </div>
      </div>



    </div>
  </>


}

export default Footer