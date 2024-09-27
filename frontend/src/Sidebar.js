import React, { useState } from 'react';
import './Sidebar.css'; 
import leftbuttonicon from './assets/leftbutton.png'; 

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // Состояние для управления видимостью

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Меняем состояние при клике
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button onClick={toggleSidebar} className="icon-button">
                <img 
                    src={leftbuttonicon}  
                    alt={isOpen ? 'Скрыть меню' : 'Показать меню'} 
                    style={{ width: '24px', height: '24px' }} // Настройте размеры по необходимости
                />
            </button>
            <nav>
                <ul>
                    <li>Главная</li>
                    <li>Shorts</li>
                    <li>Подписки</li>
                    <li>Мой канал</li>
                    <li>История</li>
                    <li>Плейлисты</li>
                    <li>Ваши видео</li>
                    <li>Фильмы и сериалы</li>
                    <li>Смотреть позже</li>
                    <li>Понравившиеся</li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
