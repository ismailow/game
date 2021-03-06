//! Выборка элементов со страницы
const hero = document.querySelector('#person');
const enemy = document.querySelector('#enemy');
//! Размер шага
let step = 10;

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
            heroPosition.bottom += 70;
            hero.style.bottom = `${heroPosition.bottom}px`;

            if(heroPosition.bottom >= 70){

            }

            //! Возврат в исходную точку
            setTimeout(() => {
                heroPosition.bottom -= 70;
                hero.style.bottom = `${heroPosition.bottom}px`
            }, 1000)
            break;
        }
    };

    //! Проигрыш при столкновении с врагом
    if(heroPosition.right >= enemyPosition.left && heroPosition.left <= enemyPosition.right && heroPosition.bottom === enemyPosition.bottom){
        alert('lose');
    };
});


const move = (func, ...args) => {
    const pressedKeys = [];

    document.addEventListener('keydown', (event) => {
        if(event.repeat) return;
        pressedKeys.push(event.code);
        console.log();
    });

    document.addEventListener('keyup', (event) => {
        if(pressedKeys.length === 0) return;

        let runFunc = true;
        for(let arg of args){
            if(!pressedKeys.includes(arg)){
                runFunc = false;
                break;
            };
        };

        if(runFunc){
            func();
        };

        pressedKeys.length = 0;
    })
}