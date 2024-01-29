import { head } from "./snakeDirection.js";
import { snakePrevPosition } from "./snakeDirection.js";

var headStyle=head.style

var gameOverScreen=document.querySelector(".game-over");
var resetButton=document.querySelector(".game-over button")

// var check=document.querySelector(".check")

// check.style.gridColumnStart=0
// check.style.gridRowStart=15




function gameOver(){
    var headOverlap = snakePrevPosition.some(obj => obj.x == headStyle.gridColumnStart && obj.y == headStyle.gridRowEnd);

  if( headStyle.gridRowEnd==1 || 
    headStyle.gridColumnStart==17 ||
    headStyle.gridRowEnd==18 ||
    headStyle.gridColumnStart==-1 || headOverlap
    ){
        gameOverScreen.style.transform=`scale(1)`
        console.log("GameOver")
        console.log(headOverlap)
       
        resetButton.addEventListener("click",()=>{
            location.reload()
        })

        return true;
  }

}


export {gameOver}