import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, username, imageSource, location, profile }) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo ${id}`} className="photo"/>
      <img src={profile} alt={`${username}'s profile`} className="profile-picture"/>
      <div className="photo-info">
        <h2>{username}</h2>
        <p>{location}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
