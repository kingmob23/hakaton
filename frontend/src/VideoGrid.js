import React from 'react';
import VideoCard from './VideoCard';
import foto from './assets/fota.jpg'; // Используем одну картинку для примера
import './VideoGrid.css';

function VideoGrid() {
  return (
    <div className="videoGrid">
      <VideoCard
        title="Как научиться программировать"
        timestamp="2 дня назад"
        channel="Канал Программиста"
        description="Подробное руководство для начинающих по программированию на Python."
        like={120}
        dislike={10}
        image={foto}
      />
      <VideoCard
        title="Обзор нового iPhone 15"
        timestamp="1 неделя назад"
        channel="Технологии Сегодня"
        description="Последний обзор iPhone 15 и его главные отличия от предыдущей версии."
        like={340}
        dislike={15}
        image={foto}
      />
      <VideoCard
        title="Путешествие по Италии"
        timestamp="3 месяца назад"
        channel="Путешествуй с нами"
        description="Мы посетили самые красивые города Италии. Узнайте, что стоит увидеть!"
        like={200}
        dislike={5}
        image={foto}
      />
      <VideoCard
        title="Как приготовить идеальную пасту"
        timestamp="5 дней назад"
        channel="Кулинарные секреты"
        description="Шеф-повар делится секретами приготовления пасты как в лучших итальянских ресторанах."
        like={95}
        dislike={3}
        image={foto}
      />
      <VideoCard
        title="Лучшие упражнения для спины"
        timestamp="2 недели назад"
        channel="Фитнес для всех"
        description="Эффективные упражнения для укрепления мышц спины и улучшения осанки."
        like={180}
        dislike={7}
        image={foto}
      />
      <VideoCard
        title="Как выбрать ноутбук для работы"
        timestamp="1 месяц назад"
        channel="Техно Гуру"
        description="Рассматриваем лучшие ноутбуки для работы в 2024 году: от бюджетных до премиум-класса."
        like={240}
        dislike={12}
        image={foto}
      />
      <VideoCard
        title="Экономика для начинающих"
        timestamp="4 дня назад"
        channel="Учись и развивайся"
        description="Объяснение основных экономических концепций для тех, кто только начинает изучать тему."
        like={75}
        dislike={4}
        image={foto}
      />
      <VideoCard
        title="Ремонт своими руками: советы экспертов"
        timestamp="3 недели назад"
        channel="Сделай Сам"
        description="Ремонт квартиры без помощи специалистов. На что обратить внимание и как сэкономить."
        like={150}
        dislike={6}
        image={foto}
      />
      <VideoCard
        title="Музыка для медитации"
        timestamp="6 дней назад"
        channel="Мир музыки"
        description="Расслабляющая музыка для медитации и йоги. Полное погружение в спокойствие."
        like={320}
        dislike={9}
        image={foto}
      />
      <VideoCard
        title="История архитектуры"
        timestamp="1 месяц назад"
        channel="Знай больше"
        description="От древних цивилизаций до современных зданий: история архитектуры в одном видео."
        like={290}
        dislike={13}
        image={foto}
      />
    </div>
  );
}

export default VideoGrid;
