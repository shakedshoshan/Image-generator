import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetUserImages = (userId) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/images/user/${userId}`);
        setImages(response.data);
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
