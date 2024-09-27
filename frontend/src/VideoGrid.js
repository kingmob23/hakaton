import React from 'react';
import VideoCard from './VideoCard';
import './VideoGrid.css';

function VideoGrid() {
  return (
    <div className="videoGrid">
      {/* Пример отображения видеокарточек */}
      <VideoCard
        title="Пример видео"
        timestamp="3 дня назад"
        channel="Канал 1"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygstOASLd5abW7mjFhWpjpjrQsYgIkikeBg&s"
      />
      <VideoCard
        title="Видео 2"
        timestamp="2 недели назад"
        channel="Канал 2"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_gxwjr41x4uboimNtfb2i7ttWKsWslwF9g&s"
      />
      <VideoCard
        title="видео 3"
        timestamp="2 недели назад"
        channel="Канал 3"
        image="https://s.rfi.fr/media/display/4c32c082-a3cf-11ec-860e-005056bfb2b6/w:1280/p:16x9/IMG_20220314_204141.jpg"
      />
      <VideoCard
        title="видео 4"
        timestamp="2 недели назад"
        channel="Канал 4"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjjHdbA0I0RKdFW2xCro3O7vgL-FnZV-MJg&s"
      />
      <VideoCard
        title="Видео 5"
        timestamp="1 месяц назад"
        channel="Канал 5"
        image="https://example.com/video5.jpg" // Заменить на действительное изображение
      />
      <VideoCard
        title="Видео 6"
        timestamp="1 месяц назад"
        channel="Канал 6"
        image="https://example.com/video6.jpg" // Заменить на действительное изображение
      />
      <VideoCard
        title="Видео 7"
        timestamp="3 дня назад"
        channel="Канал 7"
        image="https://example.com/video7.jpg" // Заменить на действительное изображение
      />
      <VideoCard
        title="Видео 8"
        timestamp="4 дня назад"
        channel="Канал 8"
        image="https://example.com/video8.jpg" // Заменить на действительное изображение
      />
      <VideoCard
        title="Видео 9"
        timestamp="5 дней назад"
        channel="Канал 9"
        image="https://example.com/video9.jpg" // Заменить на действительное изображение
      />
      <VideoCard
        title="Видео 10"
        timestamp="6 дней назад"
        channel="Канал 10"
        image="https://example.com/video10.jpg" // Заменить на действительное изображение
      />
    </div>
  );
}

export default VideoGrid;
