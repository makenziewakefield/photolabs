import { useState } from 'react';
import photos from 'mocks/photos';

const useApplicationData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhoto, setSimilarPhotos] = useState([]);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    const similar = photos.filter(photoObject => photoObject.topic === photo.topic && photoObject.id !== photo.id);
    setSimilarPhotos(similar);
  };

  const toggleFavorite = (photoId) => {
    setFavoritedPhotos((prevFavorites) =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter(id => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  const setPhotoSelected = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    setSimilarPhotos([]);
  };

  return {
    state: {
      isModalOpen,
      selectedPhoto,
      similarPhoto,
      favoritedPhotos
    },
    toggleFavorite,
    setPhotoSelected,
    handleCloseModal,
    handlePhotoClick
  };
};

export default useApplicationData;
