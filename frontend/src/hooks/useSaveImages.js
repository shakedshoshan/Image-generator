import { useState } from 'react';
import axios from 'axios';

const useSaveImages = () => {

   
    const saveImage = async (userId, imageUrl) => {
        
        try {
            // Start of Selection
            const response = await fetch('http://localhost:5000/api/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ userId, imageUrl }),
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
