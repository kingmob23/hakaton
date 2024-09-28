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
  const collectReactions = () => {
    const reactions = videos.map((video, index) => ({ 
      id: `video${index + 1}`, // Пример видео ID, замените реальными данными
      reaction: video.userReaction, // Здесь предполагается, что userReaction уже обновлено
    }));

    return reactions;
  };

  // Функция для отправки всех реакций на сервер
  const sendDataToServer = async () => {
    const reactions = collectReactions(); // Собираем все реакции
    const dataToSend = {
      user_id: "5ab7c3c3-2ba8-4d61-b81e-8722d1",
      timestamp: "2024-07-08 16:13:59 +03", // Можем использовать текущее время
      reactions: reactions, // Передаем все реакции
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/reactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend), // Отправляем данные
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Успешно отправлено:', data);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };
  return (
    <div>
    <div className="videoGrid">
      {videos.map((video,index) => (
        <VideoCard
          key={index} 
          id={index} 
          title={video.title}
          timestamp={video.timestamp}
          channel={video.channel}
          description={video.description}
          userReaction={video.userReaction}
          image={img}
        />
      ))}
    </div>
    <button onClick={sendDataToServer}>Отправить на сервер</button>
    </div>
  );
}

export default VideoGrid;