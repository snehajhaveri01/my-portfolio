// components/Image.js
import Image from 'next/image';
import React from 'react';

const CustomImage = ({ src, alt, width, height, onClick }) => {
  return (
    <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        onClick={onClick}
      />
    </div>
  );
};

export default CustomImage;
