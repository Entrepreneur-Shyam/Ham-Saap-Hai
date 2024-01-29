import { snakeMove} from "./snakeDirection.js";
import { foodPositionChange } from "./FoodPosition.js";
import { gameOver } from "./GameOver.js";

let snakeSpeed = 10;
let timeStamp = 0;
let gameStarted = false;
let lastKey = null;
let isGameOver=false;

window.addEventListener("keydown", (e) => {
    if (e.key) {
        gameStarted = true
        lastKey = e.key
        renderSpeed()
    }
})




function renderSpeed(currentTime) {
    let timeGap = (currentTime - timeStamp) / 1000
    if (timeGap >= 1 / snakeSpeed) {
        // console.log(currentTime)
        timeStamp = currentTime
        if (gameStarted) {
            snakeMove(lastKey)  
            foodPositionChange()
            isGameOver = gameOver();
        }
    }
    if (isGameOver) return;

    requestAnimationFrame(renderSpeed)
}






