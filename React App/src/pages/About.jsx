import React from 'react';

const About = () => {
    return (
        <div className="about">
            <h1 style={{textAlign: 'center', margin: '40px 0'}}>Моё первое single Page App на React!</h1>
            <div className="functional">
                <div style={{color: '#eab354'}}>В приложении использовался следующий функционал:</div>
                <div> - Переиспользуемые функциональные компоненты</div>
                <div> - Использование хуков React (useState, useMemo, useEffect, useContext, useRef)</div>
                <div> - Создание собственных хуков</div>
                <div> - Создание UI библиотеки</div>
                <div> - Реализация поиска и сортировки постов</div>
                <div> - Получение контента постов с сервера jsonplaceholder</div>
                <div> - Создан компонент Loader отвечающий за показ крутилки во время загрузки контента</div>
                <div> - Создание модального окна</div>
                <div> - Форма для создания поста</div>
                <div> - Реализованны анимации при помощи библиотеки React Transition Group</div>
                <div> - Функция удаления поста</div>
                <div> - Настроен роутинг при помощи библиотеки react-router-dom</div>
                <div> - Добавлена возможность открыть страницу поста и увидеть комментарии к нему</div>
                <div> - Добавлена простая аутентификация(значение хранится пока пользователь не вышел)</div>
                <div> - Реализованна динамическая пагинация</div>
            </div>
        </div>
    );
};

export default About;