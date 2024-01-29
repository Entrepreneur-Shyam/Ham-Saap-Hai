import { updateBody } from "./snakeBodyMovement.js";
// let spanValue=1;
// head.style.gridColumn=`${snakePosition.x}/ span ${spanValue}`
// head.style.gridRow=`${snakePosition.y}/ span ${spanValue}`


var snakePosition = { x: 9, y: 10 }
let snakePrevPosition=[];
var head = document.querySelector(".head")
head.style.gridColumnStart = snakePosition.x
head.style.gridRowEnd = snakePosition.y




const moveDirection=[
{x:0,y:-1,faceRotate:180},
{x:0,y:1,faceRotate:0},
{x:-1,y:0,faceRotate:90},
{x:1,y:0,faceRotate:270},
]
head.style.rotate = `180deg`


function snakeMove(key) {

snakePrevPosition.unshift({x:snakePosition.x,y:snakePosition.y})
updateBody()
 
    switch (key) {
        case "ArrowUp":
            upMove()
            // console.log("Up Arrow")
            break;
        case "ArrowDown":
            downMove()
            // console.log("Down Arrow")
            break;
        case "ArrowLeft":
            leftMove()
            // console.log("Left Arrow")
            break;
        case "ArrowRight":
            rightMove()
            // console.log("Right Arrow")
            break;
    }

}





function upMove() {
    if (head.style.rotate !== "0deg") {
        snakePosition.y -= 1
        head.style.gridRowEnd = snakePosition.y
        // head.style.gridRow=`${snakePosition.y}/ span ${spanValue}`
        head.style.rotate = "180deg"
    } else if (head.style.rotate === "0deg") {
        snakePosition.y += 1
        head.style.gridRowEnd = snakePosition.y
    }
    // console.log("upMove")
}

function downMove() {
    if (head.style.rotate !== "180deg") {
        snakePosition.y += 1
        head.style.gridRowEnd = snakePosition.y
        // head.style.gridRow = `${snakePosition.y}/ span ${spanValue}`
        head.style.rotate = "0deg"
    } else if (head.style.rotate === "180deg") {
        snakePosition.y -= 1
        head.style.gridRowEnd = snakePosition.y
    }
    // console.log("downMove")
}


function leftMove() {
    if (head.style.rotate !== "270deg") {
        snakePosition.x -= 1
        head.style.gridColumnStart = snakePosition.x
        // head.style.gridColumn = `${snakePosition.x}/ span ${spanValue}`
        head.style.rotate = "90deg"
    } else if (head.style.rotate === "270deg") {
        snakePosition.x += 1
        head.style.gridColumnStart = snakePosition.x
    }
    // console.log("leftMove")
}


function rightMove() {
    if (head.style.rotate !== "90deg") {
        snakePosition.x += 1
        head.style.gridColumnStart = snakePosition.x
        // head.style.gridColumn = `${snakePosition.x}/ span ${spanValue}`
        head.style.rotate = "270deg"
    } else if (head.style.rotate === "90deg") {
        snakePosition.x -= 1
        head.style.gridColumnStart = snakePosition.x
    }
    // console.log("rightMove")
}

export {head,snakeMove,snakePrevPosition};