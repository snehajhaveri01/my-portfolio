import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.pinimg.com/564x/9d/51/76/9d517609989d9ca3f81c66ad8bc602ff.jpg)'}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">COMING SOON</h1>
        <p className="mb-5">Sneha Jhaveri</p>
        {/* <button className="btn btn-primary">Get Started</button> */}
      </div>
    </div>
  </div>
  );
};

export default Hero;
