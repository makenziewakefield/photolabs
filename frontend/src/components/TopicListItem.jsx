import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, onTopicClick }) => {
  return (
    <div className="topic-list__item" onClick={() => onTopicClick(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
