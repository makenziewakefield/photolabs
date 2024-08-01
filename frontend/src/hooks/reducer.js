import { OPEN_MODAL, CLOSE_MODAL, SET_SELECTED_PHOTO, SET_SIMILAR_PHOTOS, TOGGLE_FAVORITE } from './actionTypes';

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  similarPhoto: [],
  favoritedPhotos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_MODAL:
      return { ... state, isModalOpen: false}
    case SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case SET_SIMILAR_PHOTOS:
      return { ...state, similarPhoto: action.payload };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.includes(action.payload)
          ? state.favoritedPhotos.filter(id => id !== action.payload)
          : [...state.favoritedPhotos, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
