import React from 'react';
import VideoCard from './VideoCard';
import videoData from './assets/videos.json'; // Путь к вашему локальному JSON-файлу
import './VideoGrid.css';
import img from './assets/fota.jpg'

function VideoGrid() {
  return (
    <div className="videoGrid">
      {videoData.map((video, index) => (
        <VideoCard
          key={index}
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