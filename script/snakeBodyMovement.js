import { head, snakePrevPosition } from "./snakeDirection.js";

var score=document.querySelector(".score h1 span");
let num;

score.textContent=0



function addBody() {
    let bodyPart = [];
    bodyPart.push("<div class='body-part'></div> ")
    head.insertAdjacentHTML("afterend", bodyPart.join(" "))
    score.textContent=Number(score.textContent)+1
    num= Number(score.textContent)
}

function updateBody() {
    var selector = document.querySelectorAll(".body-part")
    selector.forEach((el, i) => {
        if (snakePrevPosition[i]) {
            el.style.display = "inline"
            el.style.gridColumnStart = snakePrevPosition[i].x
            el.style.gridRowEnd = snakePrevPosition[i].y
        }
    })
    snakePrevPosition.splice(num)
}




export { addBody, updateBody }

