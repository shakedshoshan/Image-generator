import { useState } from 'react';
import axios from 'axios';

const useDeleteImage = () => {

   
    const deleteImage = async (userId, imageUrl) => {
        
        try {
        const response = await fetch('http://localhost:5000/api/images/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ userId, imageUrl })
        });
        console.log(response);
        return response;
        } catch (err) {
        
        throw err;
        } finally {
        
        }
    };

    return { deleteImage };
    };

export default useDeleteImage;
