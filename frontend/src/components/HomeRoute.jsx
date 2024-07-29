import React, { useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  // State to track favorited photos
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  // Function to toggle favorite status of a photo
  const toggleFavorite = (photoId) => {
    setFavoritedPhotos(prev =>
      prev.includes(photoId)
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  // Boolean indicating if there are favorited photos
  const hasFavorites = favoritedPhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favoritedPhotos={favoritedPhotos}
        hasFavorites ={hasFavorites}
      />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;
