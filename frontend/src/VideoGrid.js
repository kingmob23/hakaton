import React from 'react';
import VideoCard from './VideoCard';
import './VideoGrid.css';
import foto from './assets/fota.jpg';

function VideoGrid() {

  return (
    <div className="videoGrid">
      {/* Пример отображения видеокарточек */}
      <VideoCard
        title="Пример видео"
        timestamp="3 дня назад"
        channel="Канал 1"
        description="Смотрите на канале Канал ПИЗДЮКИ ПИЗДЯТСЯ ЗА ЧЕКУШКУ" 
        image={foto}

      />
      <VideoCard
        title="Видео 2"
        timestamp="2 недели назад"
        channel="Канал 2"
        image={foto}
      />
      <VideoCard
        title=" на свой канал"
        timestamp="2 недели назад"
        channel="Канал 3"
        image={foto}
      />
      <VideoCard
        title="САША КЕРПЛ"
        timestamp="2 недели назад"
        channel="Канал 4"
        image={foto}
      />
      <VideoCard
        title="Видео 5"
        timestamp="1 месяц назад"
        channel="Канал 5"
        image={foto}
      />
      <VideoCard
        title="Видео 6"
        timestamp="1 месяц назад"
        channel="Канал 6"
        image={foto}
      />
      <VideoCard
        title="Видео 7"
        timestamp="3 дня назад"
        channel="Канал 7"
        image={foto}
      />
      <VideoCard
        title="Видео 8"
        timestamp="4 дня назад"
        channel="Канал 8"
        image={foto}
      />
      <VideoCard
        title="Видео 9"
        timestamp="5 дней назад"
        channel="Канал 9"
        description="ПРИМЕР "
        image={foto}
      />
      <VideoCard
        title="Видео 10"
        timestamp="6 дней назад"
        channel="Канал 10"
        image={foto}
      />
    </div>
  );
}

export default VideoGrid;
