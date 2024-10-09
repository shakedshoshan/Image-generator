import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useAuthContext } from '../context/AuthContext';  
import useGetUserImages from '../hooks/useGetUserImages';
import ImagesCrusel from '../components/ImagesCrusel';
import useAuth from '../zustand/useAuth';
const Profile = () => {
  const { authUser } = useAuth();
  const { images } = useGetUserImages(authUser.id);

  return (
    <div className=" mx-auto px-4 py-8 mt-0">
      <h1 className="text-2xl font-bold mb-4">{authUser.username} Profile</h1>
      <h2 className="text-lg mb-4">Your Favorite Images</h2>
      <ImagesCrusel images={images} isSelected={true} />
    </div>
  );
};

export default Profile;
