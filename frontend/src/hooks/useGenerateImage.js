import { useState } from 'react';
import axios from 'axios';

const useGenerateImage = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const generateImage = async (text) => {
    setLoading(true);

    const options = {
      method: 'POST',
      url: 'https://ai-image-generator3.p.rapidapi.com/generate',
      headers: {
        'x-rapidapi-key': '948f8b4495mshce728272b155600p12d3a9jsndb97509bab0d',
        'x-rapidapi-host': 'ai-image-generator3.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        prompt: text,
        page: 1
      }
    };

    try {
      const response = await axios.request(options);
      console.log('API Response:', response);
      setImages(response.data.results.images);
      setCurrentIndex(0);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(false);
    }
  };

  return { images, currentIndex, loading, generateImage };
};

export default useGenerateImage;