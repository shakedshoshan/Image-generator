import { useState } from 'react';
import axios from 'axios';

const useSaveImages = () => {

   
    const saveImage = async (userId, imageUrl) => {
        
        try {
        const response = await axios.post('http://localhost:5000/api/images', {userId, imageUrl} , {
            headers: {
            'Content-Type': 'application/json',
            },
        });
        console.log(response);
        return response;
        } catch (err) {
        
        throw err;
        } finally {
        
        }
    };

    return { saveImage };
    };

export default useSaveImages;
