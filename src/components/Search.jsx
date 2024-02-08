import React, { useEffect, useRef, useState } from 'react';
import Home from './Home';
import Loader from './Loader/Loader';

const Search = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const inputFocus = useRef(null);

  useEffect(() => {
    const getSearch = async () => {
      try {
        setLoader(true);
        const getData = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${input}`);
        const responseData = await getData.json();
        setData(responseData.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false);
      }
    };

    setTimeout(() => {
      getSearch();
    }, 1000);

  }, [input]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        inputFocus.current.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <>
      <div className='bg-[#0E1947]'>
        {loader ? (
          <Loader />
        ) : (
          <div>
            <div className="flex justify-center items-center py-5 ">
              <input
                type="text"
                className={`font-bold w-72 px-5 py-2 rounded-md border-[#939AB0] border-[2px] bg-[#353D62]  ${isInputFocused ? "bg-white text-black duration-300" : "bg-[#353D62] duration-300 text-black" } `}
                placeholder='Search Games.. [alt + enter ]'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputFocus}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            {input &&
              <h1 className='text-center font-bold text-2xl  text-white'>Result "{input}"</h1>
            }

            <h2 className='bg-[#0E1947] font-bold text-2xl  text-white px-10'>Top Games</h2>

            <div className='grid grid-cols-4 gap-4 py-10 w-full min-h-full max-sm:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3 bg-[#0E1947]'>
              {data.map((item) => (
                <Home key={item.id} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
