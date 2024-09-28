import React from 'react';
import './VideoCard.css';

function VideoCard({ image, title, channel, description, timestamp, like, dislike }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={title} />
      <div className="videoCard__info">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{description} • {timestamp}</p>
        <button className="videoCard__likes">{like} Like</button>
        <button className="videoCard__dislikes">{dislike} Dislike</button>
      </div>
    </div>
  );
}

export default VideoCard;
