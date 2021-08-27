import { GRID_SIZE } from "./grid.js";
import { getInputDirection } from "./input.js";

export let SNAKE_SPEED = 7;
let gridCenter = Math.floor(GRID_SIZE / 2);
const snakeBody = [ {x: gridCenter, y: gridCenter} ];
let snakeHead = getSnakeHead();

export function update () {
    let inputDirection = getInputDirection();

    for(let i = snakeBody.length -2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]};
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw (gameBoard) {
    snakeBody.forEach( segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeEatFood (foodPostion){
    return snakeBody.some(element => {
        return element.x == foodPostion.x && element.y == foodPostion.y
    })
    // return snakeHead.x == foodPostion.x && snakeHead.y == foodPostion.y 
}

export function expandSnake(){
    snakeBody.push({...snakeBody[length-1]})
    SNAKE_SPEED += 0.1;
}

export function snakeIntersection () {
    for (let i = 1; i < snakeBody.length; i++) {
        const element = snakeBody[i];
        if (element.x == snakeHead.x && element.y == snakeHead.y ) return true;
    }
    return false;
}