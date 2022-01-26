//! Выборка элементов со страницы
const hero = document.querySelector('#person');
const enemy = document.querySelector('#enemy');
//! Размер шага
let step = 10;
let jumpCounter = 0; //! Счетчик прыжков

//! Координаты персонажа
const heroPosition = {
    x: hero.getBoundingClientRect().x,
    y: hero.getBoundingClientRect().y,
    top: hero.getBoundingClientRect().top,
    left: hero.getBoundingClientRect().left,
    bottom: hero.getBoundingClientRect().bottom = 0,
    right: hero.getBoundingClientRect().right,
}

//! Координаты врага
const enemyPosition = {
    x: enemy.getBoundingClientRect().x,
    y: enemy.getBoundingClientRect().y,
    top: enemy.getBoundingClientRect().top,
    left: enemy.getBoundingClientRect().left,
    bottom: enemy.getBoundingClientRect().bottom = 0,
    right: enemy.getBoundingClientRect().right,
}

//! Прослушка события нажатия клавиш
document.addEventListener('keydown', (event) => {
    //! Обработка нажатых клавиш
    switch(event.code){
        //! Движение вперед
        case('ArrowRight'):{
            heroPosition.left += step;
            heroPosition.right += step;
            hero.style.left = `${heroPosition.left}px`;
            break;
        };

        //! Движение назад
        case('ArrowLeft'):{
            heroPosition.left -= step;
            heroPosition.right -= step;
            hero.style.left = `${heroPosition.left}px`;
            break;
        };

        //! Прыжок
        case('ArrowUp'):{

            //! Прыжок если до этого не было прыжка
            if(jumpCounter === 0){
                jumpCounter += 1; //! Обновление счетчика
                heroPosition.bottom += 70;
                hero.style.bottom = `${heroPosition.bottom}px`;
                console.log(jumpCounter);

                //! Возврат в исходную точку
                setTimeout(() => {
                    heroPosition.bottom -= 70;
                    hero.style.bottom = `${heroPosition.bottom}px`;
                    jumpCounter = 0; //! Обнуление счетчика
                }, 1000);
            }
            break;
        }
    };

    //! Проигрыш при столкновении с врагом
    if(heroPosition.right >= enemyPosition.left && heroPosition.left <= enemyPosition.right && heroPosition.bottom === enemyPosition.bottom){
        alert('lose');
    };
});