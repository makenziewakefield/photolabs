import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'


// Responsible for rendering nav bar, including the logo, topic list, and fav bage icon
const TopNavigation = ({ topics, hasFavorites, handleTopicClick }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={handleTopicClick} />
      <FavBadge hasFavorites={hasFavorites} />
    </div>
  )
}

export default TopNavigation;