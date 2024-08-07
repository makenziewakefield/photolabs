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


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    isModalOpen: false,
    selectedPhoto: null,
    similarPhoto: [],
    favoritedPhotos: [],
    photoData: [],
    topicData: [],
  });

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

  const handlePhotoClick = (photo) => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: photo });
    dispatch({ type: OPEN_MODAL });
    const similar = state.photoData.filter(photoObject => photoObject.topic === photo.topic && photoObject.id !== photo.id);
    dispatch({ type: SET_SIMILAR_PHOTOS, payload: similar });
  };

  const handleTopicClick = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then(data => dispatch({ type: FETCH_PHOTOS_BY_TOPIC, payload: data }))
      .catch(error => console.error('Error fetching photos by topic:', error));
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: photoId });
  };

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
