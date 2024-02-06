'use client'

import React, { useState } from 'react';
import CustomImage from './Image';

const Project = ({ image, description }) => {
  const [maximized, setMaximized] = useState(false);

  const toggleMaximize = () => {
    setMaximized(!maximized);
  };

  return (
    <div className={`project ${maximized ? 'maximized' : ''}`}>
      <CustomImage
        src={image}
        alt="Project Photo"
        onClick={toggleMaximize}
      />
      <p>{description}</p>
    </div>
  );
};

export default Project;