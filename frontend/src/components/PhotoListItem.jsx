import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  const { id, username, imageSource, location, profile } = photo;
  const { city, country } = location;

  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`Photo ${id}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <h2>{username}</h2>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
