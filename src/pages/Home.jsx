import React from 'react';
import homeImg from '../assets/imgHOME_may2019.jpg';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <SEO
                title="Home"
                description="Benvenuti allo Studio Dentistico Rossetti a Milano. Eccellenza in chirurgia orale, implantologia e cure dentali personalizzate."
            />
            <div className="max-w-[1200px] w-full">
                <img
                    src={homeImg}
                    alt="Studio Dentistico Rossetti Milano - Ingresso"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Home;
