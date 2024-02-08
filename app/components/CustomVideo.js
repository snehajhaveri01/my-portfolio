import React from 'react';
import ReactPlayer from 'react-player';

const CustomVideo = ({ videos, alt, width, height, onClick }) => {
  return (
    <div style={{ width: '100%', maxWidth: `${width}px`, height: `${height}px`, margin: 'auto' }}>
      <ReactPlayer
        url={videos[0]} // Use the first video in the array
        alt={`${alt}-video`}
        width="100%"
        height="100%"
        controls // Add controls for the video player
      />
    </div>
  );
};

export default CustomVideo;
