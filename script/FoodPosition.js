
import { head } from "./snakeDirection.js"
import { addBody } from "./snakeBodyMovement.js"
import { snakePrevPosition } from "./snakeDirection.js"


const food = document.querySelector('.food')
food.style.gridColumnStart = Math.round(Math.random() * 15) + 1
food.style.gridRowEnd = Math.round(Math.random() * 15) + 2


var imgArr=["frog","Strawberry","cake"]

food.style.backgroundImage=`url(assets/${imgArr[Math.round(Math.random()*2)]}.png)`



function foodPositionChange() {

    let foodPositionX = Math.round(Math.random() * 15) + 1
    let foodPositionY = Math.round(Math.random() * 15) + 2
    var foodPositionCheck = snakePrevPosition.some(obj => obj.x === foodPositionX && obj.y === foodPositionY)

    if (head.style.gridColumnStart === food.style.gridColumnStart &&
        head.style.gridRowEnd === food.style.gridRowEnd) {
            food.style.backgroundImage=`url(assets/${imgArr[Math.round(Math.random()*2)]}.png)`

        if (foodPositionCheck) {
            foodPositionX = Math.round(Math.random() * 15) + 1
            foodPositionY = Math.round(Math.random() * 15) + 2
        }
        food.style.gridColumnStart = foodPositionX
        food.style.gridRowEnd = foodPositionY
        addBody()
    }
}


export { foodPositionChange }