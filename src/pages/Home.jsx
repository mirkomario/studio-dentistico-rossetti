import React from 'react';
import homeImg from '../assets/imgHOME_may2019.jpg';

const Home = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <div className="max-w-[1200px] w-full">
                <img
                    src={homeImg}
                    alt="Home Rossetti"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Home;
