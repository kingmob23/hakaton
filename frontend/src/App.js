import React from 'react';
import Header from './Header';
import VideoGrid from './VideoGrid';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Хедер с поиском и иконками */}
      <Header />

      <div className="app__body">
        {/* Боковое меню навигации */}

        {/* Основной контент — сетка видеороликов */}
        <VideoGrid />
      </div>
    </div>
  );
}

export default App;
