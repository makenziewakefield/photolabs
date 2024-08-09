import { useReducer, useEffect } from 'react';
import reducer from './reducer';
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_SELECTED_PHOTO,
  SET_SIMILAR_PHOTOS,
  TOGGLE_FAVORITE,
  SET_PHOTO_DATA,
  SET_TOPIC_DATA,
  FETCH_PHOTOS_BY_TOPIC
} from './actionTypes';


// Custom hook for managing application state and side effects
const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, {
    isModalOpen: false,     // Boolean to track if modal is open
    selectedPhoto: null,    // Object to hold selected photo
    similarPhoto: [],       // Array to hold similar photos
    favoritedPhotos: [],    // Array to track favorited photos
    photoData: [],          // Array to store photo data fetched from API
    topicData: [],          // Array to store topic data fetched from API
  });


  // Fetch photo and topic data when component mounts
  useEffect(() => {
    fetch("/api/photos")
      .then(response => response.json())
      .then(data => dispatch({ type: SET_PHOTO_DATA, payload: data }))
      .catch(error => console.error("Error fetching photos:", error));

    fetch("/api/topics")
      .then(response => response.json())
      .then(data => dispatch({ type: SET_TOPIC_DATA, payload: data }))
      .catch(error => console.error("Error fetching topics:", error));
  }, []);


  // Handle photo click by setting selected photo and opening the modal
  const handlePhotoClick = (photo) => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: photo });
    dispatch({ type: OPEN_MODAL });
    const similar = state.photoData.filter(photoObject => photoObject.topic === photo.topic && photoObject.id !== photo.id);
    dispatch({ type: SET_SIMILAR_PHOTOS, payload: similar });
  };

  // Handle topic click by fetching photos related to the selected topic
  const handleTopicClick = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then(data => dispatch({ type: FETCH_PHOTOS_BY_TOPIC, payload: data }))
      .catch(error => console.error('Error fetching photos by topic:', error));
  };

  // Toggle the favorite status of a photo
  const toggleFavorite = (photoId) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: photoId });
  };

  // Close the modal and reset selected photo and similar photos
  const handleCloseModal = () => {
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: SET_SELECTED_PHOTO, payload: null });
    dispatch({ type: SET_SIMILAR_PHOTOS, payload: [] });
  };

  return {
    state,
    toggleFavorite,
    handleCloseModal,
    handlePhotoClick,
    handleTopicClick
  };
};

export default useApplicationData;
