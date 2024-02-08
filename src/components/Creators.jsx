import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';

const Creators = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);
        const res = await fetch(`https://api.rawg.io/api/creators?key=${import.meta.env.VITE_API_KEY}`);
        if (!res.ok) {
          console.log("Error in fetching data");
        }
        const data = await res.json();
        setData(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    };

    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section className='bg-[#0E1947] '>
          <h1 className='text-white py-10 mx-[7rem] pb-0 text-3xl font-bold max-sm:text-xl '>Best Creators</h1>
          <div className='grid grid-cols-4 gap-10 px-20 max-sm:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3  max-sm:px-12'>
            {data.map((cr) => (
              <div key={cr.id}>
                <div>
                  <img src={cr.image} alt="" className='w-40 h-40 rounded-full mx-auto relative top-[10em] z-40  border-slate-700 border-2 hover:scale-105 duration-300' />
                  <p className='font-bold text-white text-xl text-center z-50 mx-24 mt-[10em] bg-gray-600 rounded-md px-2 py-1 absolute'>{cr.name}</p>




                  <img src={cr.image_background} className='w-75 h-96 object-cover mt-[-6rem] filter brightness-50  hover:scale-105 duration-300' alt="" />
                  <div className='flex flex-row gap-5 justify-center items-center'>
                    {cr.positions.map((position) => (
                      <div key={position.id} className='flex justify-center items-center relative bottom-12'>
                        <p className='text-white font-bold text-[15px] shadow-2xl capitalize '>{position.name}</p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Creators;
