import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlideshow = ({ images, alt, width, height, onClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const containerStyle = {
    width: '100%', // Use 100% for responsive width
    maxWidth: `${width}px`, // Set max-width for larger screens
    height: `${height}px`,
    margin: 'auto', // Center the slideshow horizontally
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${alt}-slide-${index}`}
            style={{ width: '100%', height: '100%' }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlideshow;
