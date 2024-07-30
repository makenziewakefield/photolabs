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

  // Function to handle photo click and open modal
  const handleOpenModal = (selectedPhoto) => {
    setSelectedPhoto(selectedPhoto);
    setSimilarPhotos(selectedPhoto.similar_photos);
    setIsModalOpen(true);
  };

  // function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    setSimilarPhotos([]);
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onPhotoClick={handleOpenModal} />
      <PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        photo={selectedPhoto}
        similarPhotos={similarPhoto}
      />
    </div>
  );
};

export default App;
