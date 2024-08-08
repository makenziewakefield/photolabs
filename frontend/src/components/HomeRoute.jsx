import React, { useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, handlePhotoClick, handleTopicClick, favoritedPhotos, toggleFavorite }) => {

  // Boolean indicating if there are favorited photos
  const hasFavorites = favoritedPhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favoritedPhotos={favoritedPhotos}
        hasFavorites={hasFavorites}
        handleTopicClick={handleTopicClick}
      />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        handlePhotoClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
