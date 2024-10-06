import React, { useState } from 'react';
import useGenerateImage from '../hooks/useGenerateImage';
import ImagesCrusel from './ImagesCrusel';
import data from '../assets/datatemp';
const GenerateImage = () => {
  const { generateImage, images, currentIndex, loading } = useGenerateImage();
  const [input, setInput] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleGenerate = () => {
    // setGeneratedImage(generateImage(input));
    setGeneratedImage(data.images);
  };

  return (
    <div className="max-w mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Image Generator</h2>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt here"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleGenerate}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Generate
      </button>
      {generatedImage && (
        <div className="">
            <ImagesCrusel images={generatedImage} />        
          {/* {images.map((image, index) => (
            <div key={index} className="relative">
              <img 
                src={image} 
                alt={`Generated ${index + 1}`} 
                className="w-full h-full object-cover rounded-md shadow-md" 
              />
              <div className="absolute bottom-2 right-2 bg-white bg-opacity-75 px-2 py-1 rounded-md text-sm">
                {index + 1}/{images.length}
              </div>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
