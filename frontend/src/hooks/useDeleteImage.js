import { useState } from 'react';
import axios from 'axios';

const useDeleteImage = () => {

   
    const deleteImage = async (userId, imageUrl) => {
        
        try {
        const response = await axios.post('http://localhost:5000/api/images/delete', {userId, imageUrl} , {
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

    return { deleteImage };
    };

export default useDeleteImage;
