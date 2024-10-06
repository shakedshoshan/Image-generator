import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard.jsx';

const ImagesCrusel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 grid grid-cols-4 gap-4">
      {images.map((image, index) => (
            <div key={index} className="relative">
                <ImageCard image={image} index={index} totalImages={images.length} />
            </div>
          ))}
    </div>
  );
};

export default ImagesCrusel;
