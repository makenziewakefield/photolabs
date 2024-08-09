import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, isFavorite, toggleFavorite, onClick }) => {
  
  const { id, user, urls, location } = photo;
  const { username, profile } = user;
  const { city, country } = location;

  return (
    <li className="photo-list__item">
      <img className="photo-list__image" src={urls.regular} alt={`Photo ${id}`} onClick={onClick}/>
      <div className="photo-fav-button-container">
        <PhotoFavButton
          photoId={id}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      </div>
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <h2>{username}</h2>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
