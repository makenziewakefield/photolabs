import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhoto, setSimilarPhotos] = useState([]);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const handlePhotoClick = photo => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    const similar = photos.filter(photoObject => photoObject.topic === photo.topic && photoObject.id !== photo.id);
    setSimilarPhotos(similar);
  };

  const toggleFavorite = photoId => {
    setFavoritedPhotos((prevFavorites) =>
    prevFavorites.includes(photoId)
    ? prevFavorites.filter(id => id !== photoId)
    : [...prevFavorites, photoId]
    );
  };

  // function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    setSimilarPhotos([]);
  };

  const isFavorite = selectedPhoto ? favoritedPhotos.includes(selectedPhoto.id) : false;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        handlePhotoClick={handlePhotoClick}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
      />
      <PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        photo={selectedPhoto}
        similarPhotos={similarPhoto}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
};

export default App;
