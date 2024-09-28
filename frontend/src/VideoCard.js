import React, { useState } from 'react';
import './VideoCard.css';
import PL from './assets/like.png';
import PD from './assets/dlike.png';
import ZL from './assets/icons8-палец-вверх-24.png';
import ZD from './assets/icons8-палец-вверх-24-2.png';

function VideoCard({id, image, title, channel, description, timestamp, userReaction }) {
  // Используем хук useState для управления реакцией пользователя
  const [useReaction, setUserReaction] = useState(0);

  // Обработчик для лайков
  const handleLike = () => {
    if (useReaction === 2) {
      setUserReaction(0); // Отменить лайк
    } else {
      setUserReaction(2); // Поставить лайк
    }
  };

  // Обработчик для дизлайков
  const handleDislike = () => {
    if (useReaction === 1) {
      setUserReaction(0); // Отменить дизлайк
    } else {
      setUserReaction(1); // Поставить дизлайк
    }
  };

  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={title} />
      <div className="videoCard__info">
        <div className="videoCard__header">
          <h4>{title}</h4>
          <div className="videoCard__actions">
            <button 
              className="videoCard__likes" 
              onClick={handleLike} 
              style={{ backgroundImage: useReaction === 2 ? `url(${PL})` : `url(${ZL})` }}
            >
            </button>
            <button 
              className="videoCard__dislikes" 
              onClick={handleDislike} 
              style={{ backgroundImage: useReaction === 1 ? `url(${PD})` : `url(${ZD})` }}
            >{userReaction === useReaction}
            </button>
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