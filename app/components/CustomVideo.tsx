import React from 'react';
import ReactPlayer from 'react-player';

type videoProps = {
  videos : string[],
  alt: string,
  width : string,
  height : string
}

const CustomVideo = (props:videoProps) => {
  return (
    <div style={{ width: '100%', maxWidth: `${props.width}px`, height: `${props.height}px`, margin: 'auto' }}>
      <ReactPlayer
        url={props.videos[0]} // Use the first video in the array
        alt={`${props.alt}-video`}
        width="100%"
        height="100%"
        controls // Add controls for the video player
      />
    </div>
  );
};

export default CustomVideo;
