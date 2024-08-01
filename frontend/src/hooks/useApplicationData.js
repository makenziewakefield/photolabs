// useApplicationData.js
import { useReducer } from 'react';
import reducer from './reducer';
import { SET_MODAL_OPEN, SET_SELECTED_PHOTO, SET_SIMILAR_PHOTOS, TOGGLE_FAVORITE } from './actionTypes';
import photos from 'mocks/photos';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    isModalOpen: false,
    selectedPhoto: null,
    similarPhoto: [],
    favoritedPhotos: [],
  });

  const handlePhotoClick = (photo) => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: photo });
    dispatch({ type: SET_MODAL_OPEN, payload: true });
    const similar = photos.filter(photoObject => photoObject.topic === photo.topic && photoObject.id !== photo.id);
    dispatch({ type: SET_SIMILAR_PHOTOS, payload: similar });
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: photoId });
  };

  const handleCloseModal = () => {
    dispatch({ type: SET_MODAL_OPEN, payload: false });
    dispatch({ type: SET_SELECTED_PHOTO, payload: null });
    dispatch({ type: SET_SIMILAR_PHOTOS, payload: [] });
  };

  return {
    state,
    toggleFavorite,
    handleCloseModal,
    handlePhotoClick,
  };
};

export default useApplicationData;
