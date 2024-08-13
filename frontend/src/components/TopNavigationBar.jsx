import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'


// Responsible for rendering nav bar, including the logo, topic list, and fav bage icon
const TopNavigation = ({ topics, hasFavorites, handleTopicClick, handleFavIconClick }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={handleTopicClick} />
      <button className='fav-icon-button' onClick={handleFavIconClick}>
        <FavBadge hasFavorites={hasFavorites} />
      </button>
    </div>
  )
}

export default TopNavigation;