import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import './VideoGrid.css';
import img from './assets/fota.jpg';

function VideoGrid() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/recommend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"user_id": "5ab7c3c3-2ba8-4d61-b81e-8722d1", "timestamp": "2024-07-08 16:13:59 +03", "reactions": []}), // Если вам нужны данные в теле запроса, передайте их здесь
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setVideos(data.recommended_videos); // Здесь мы ожидаем массив видео
      } catch (error) {
        console.error('Ошибка при загрузке видео:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="videoGrid">
      {videos.map((video,index) => (
        <VideoCard
          id={index}
          title={video.title}
          timestamp={video.timestamp}
          channel={video.channel}
          description={video.description}
          like={video.like}
          dislike={video.dislike}
          image={img}
        />
      ))}
    </div>
  );
}

export default VideoGrid;