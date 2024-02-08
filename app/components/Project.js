'use client'

import React, { useState } from 'react';
import Customvideo from './Slideshow';

const Project = ({ video, description }) => {
  const [maximized, setMaximized] = useState(false);

  const toggleMaximize = () => {
    setMaximized(!maximized);
  };

  return (
    <div className={`project ${maximized ? 'maximized' : ''}`}>
      <Customvideo
        src={video}
        alt="Project Video"
        onClick={toggleMaximize}
      />
      <p>{description}</p>
    </div>
  );
};

export default Project;