import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ id, slug, title }) => {
  return (
    <div className="topic-list__item" key={id}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
