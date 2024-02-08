import React from 'react';

const Loader = () => {
    return <>
        <div className="flex flex-row items-center justify-center h-screen bg-[#0E1947] text-white gap-2">
            <div className="w-6 h-6 rounded-full bg-white animate-bounce" style={{ animationDelay: '.7s' }}></div>
            <div className="w-6 h-6 rounded-full bg-white animate-bounce" style={{ animationDelay: '.3s' }}></div>
            <div className="w-6 h-6 rounded-full bg-white animate-bounce" style={{ animationDelay: '.7s' }}></div>

        </div>
    </>
};

export default Loader;
