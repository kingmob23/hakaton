import React from 'react';
import './VideoCard.css';

function VideoCard({ image, title, channel, views, timestamp }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={title} />
      <div className="videoCard__info">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} • {timestamp}</p>
      </div>
    </div>
  );
}

export default VideoCard;
