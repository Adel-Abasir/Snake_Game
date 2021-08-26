import {snakeEatFood, expandSnake} from './snake.js'
import {randomGridPostion} from './grid.js'

let foodPostion = getRandomFoodPostion();
// const  EXPANSION_RATE = 1;

export function update () {
    if(snakeEatFood( foodPostion )){
        expandSnake();
        foodPostion = getRandomFoodPostion();
    }
}

export function draw (gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = foodPostion.y;
    foodElement.style.gridColumnStart = foodPostion.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPostion() {
    let newFoodPostion;
    while ( newFoodPostion == null || snakeEatFood(newFoodPostion)) {
        newFoodPostion = randomGridPostion()
    }
    return newFoodPostion;
}