import React from 'react';
import VideoCard from './VideoCard';
import './VideoGrid.css';

function VideoGrid() {
  const imageUrl = "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/19403ebe26a46a077e309a07d382cd875a5929ab8bc7585e04e084a1f3462cb21602502290105.jpg";

  return (
    <div className="videoGrid">
      {/* Пример отображения видеокарточек */}
      <VideoCard
        title="Пример видео"
        timestamp="3 дня назад"
        channel="Канал 1"
        image={imageUrl}
      />
      <VideoCard
        title="Видео 2"
        timestamp="2 недели назад"
        channel="Канал 2"
        image={imageUrl}
      />
      <VideoCard
        title=" на свой канал"
        timestamp="2 недели назад"
        channel="Канал 3"
        image={imageUrl}
      />
      <VideoCard
        title="САША КЕРПЛ"
        timestamp="2 недели назад"
        channel="Канал 4"
        image={imageUrl}
      />
      <VideoCard
        title="Видео 5"
        timestamp="1 месяц назад"
        channel="Канал 5"
        image={imageUrl}
      />
      <VideoCard
        title="Видео 6"
        timestamp="1 месяц назад"
        channel="Канал 6"
        image={imageUrl}
      />
      <VideoCard
        title="Видео 7"
        timestamp="3 дня назад"
        channel="Канал 7"
        image={imageUrl}
      />
      <VideoCard
        title="Видео 8"
        timestamp="4 дня назад"
        channel="Канал 8"
        image={imageUrl}
      />
      <VideoCard
        title="Видео 9"
        timestamp="5 дней назад"
        channel="Канал 9"
        image={imageUrl}
      />
      <VideoCard
        title="Видео 10"
        timestamp="6 дней назад"
        channel="Канал 10"
        image={imageUrl}
      />
    </div>
  );
}

export default VideoGrid;
