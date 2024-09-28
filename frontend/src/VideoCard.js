import React from 'react';
import './VideoCard.css';

function VideoCard({ image, title, channel, description, timestamp, like, dislike }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={title} />
      <div className="videoCard__info">
        <div className="videoCard__header">
          <h4>{title}</h4>
          <div className="videoCard__actions">
            <button className="videoCard__likes">{like} Like</button>
            <button className="videoCard__dislikes">{dislike} Dislike</button>
          </div>
        </div>
        <div className="videoCard__meta">
          <p className="videoCard__channel">{channel}</p>
          <p className="videoCard__timestamp">{timestamp}</p>
        </div>
        <p className="videoCard__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoCard;
