import React from 'react';

const Home = ({ background_image, id, name, released }) => {

  if (!background_image || !id || !name || !released) {
    return null;
  }

  return <>

    <div className='flex flex-row w-fit cursor-pointer bg-[#0E1947] '>
      <div className='text-white' key={id}>
        <img
          src={background_image}
          alt={name}
          loading='lazy'
          className='w-[80%] h-[200px] ml-10 max-sm:w-[80%] max-sm:ml-9 rounded-md object-cover hover:scale-105 duration-300 '
        />
        <p className='text-center mr-5 font-bold text-xl mt-1 max-sm:w-full '>{name}</p>
        <p className='text-center'>{released}</p>
      </div>
    </div>

  </>
};

export default Home;
