import React, { useState } from 'react';
import useSaveImages from '../hooks/useSaveImages';
import useDeleteImage from '../hooks/useDeleteImage';
import { useAuthContext } from '../context/AuthContext';

const ImageCard = ({ image, index, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelectedTemp, setIsSelectedTemp] = useState(isSelected);
  const { authUser } = useAuthContext();
  const { saveImage } = useSaveImages();
  const { deleteImage } = useDeleteImage();

  
  const handleSelect = (image) => {
    
    // console.log(image);
    if(!isSelected){
        saveImage(authUser.id, image);
    }else{
        deleteImage(authUser.id, image);
    }
    setIsSelectedTemp(!isSelectedTemp);
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = image;
    link.download = `downloads/generated_image_${index + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="relative cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={`Generated ${index + 1}`} 
        className="w-full h-full object-cover rounded-md shadow-md" 
      />
      {(isHovered || isSelectedTemp) && (
        <>
          <div 
            className="absolute top-2 right-2 bg-white bg-opacity-75  rounded-full cursor-pointer"
            onClick={() => handleSelect(image)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-7 w-7 rounded-full ${isSelectedTemp ? 'bg-green-500 text-white' : 'text-gray-500'}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <button
            className="absolute top-2 left-2 bg-white bg-opacity-75 p-1 rounded-full"
            onClick={handleDownload}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCard;
