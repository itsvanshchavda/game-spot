import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';

const Genres = () => {
  const [data, setData] = useState([]);
  const [games, setGames] = useState([]);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true)
        const response = await fetch(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data.results);
        setGames(data.games);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false)
      }
    };

    setTimeout(() => {
      getData();
    }, [1000])

  }, []);

  return (
    <>

      {loader ? (<Loader />) : (
        <section className='bg-[#0E1947]'>
          <h1 className='text-white py-10 mx-[7rem] text-3xl font-bold '>Top Genres</h1>
          <div className='grid grid-cols-4 py-10 px-20 pb-5 max-sm:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3 max-sm:px-12'>
            {data.map((items) => (
              <div key={items.id} className="relative">
                <img src={items.image_background} className="w-72 h-72 object-cover filter brightness-50 shadow-inner rounded-md max-sm:max-w-96 max-sm:max-h-full hover:scale-105 duration-300" />
                <h1 className="absolute top-20 left-28   text-white text-center font-bold">{items.name}</h1>
                <div className="flex">
                  <p className="text-white relative bottom-[9em] px-10 font-bold max-sm:px-5">Popular item </p>
                  <p className="text-gray-400 relative bottom-[9em] font-semibold left-6">{items.games_count}</p>
                </div>
                {/* Top Games */}
                {items.games.slice(0, 3).map((game, index) => (
                  <div key={index} className="flex justify-start relative bottom-32 ">
                    <p className="text-white text-[15px] font-semibold ml-10 max-sm:text-[12px] max-xl:text-[13px]">
                      {game.name.length > 20 ? `${game.name.slice(0, 20)}...` : game.name}
                    </p>
                    <p className="text-gray-400 mx-auto mr-24 max-xl:mr-20">{game.added}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}


    </>
  );
};

export default Genres;
