import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetUserImages = (userId) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
          // Start of Selection
          try {
            const response = await fetch(`http://localhost:5000/api/images/user/${userId}`, {
              method: 'GET',
              credentials: 'include',
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setImages(data);
          } catch (err) {
            setError(err);
          } finally {
      
          }
    };

    if (userId) {
      fetchImages();
    }
  }, [userId]);

  return { images, error };
};

export default useGetUserImages;
