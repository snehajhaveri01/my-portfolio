import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <Image src="/assets/images/books.png"
       className="" 
       alt="Hero"
       width={1000}
       height={1000} />
      <div>
        <h1 className="text-5xl font-bold"> Hey, Myself Sneha Jhaveri</h1>
        <p className="py-6">a software developer specializing in web and app development. I'm passionate about efficient coding and embody a unique blend of expertise and curiosity.</p>
        <p>Beyond tech, I am a Cofficionado, avid reader, fitness enthusiast, and dedicated journaler, embracing holistic growth.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default Hero;
