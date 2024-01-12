const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

import { calcenterX } from "../script/utiles.js";
import { calcenterY } from "../script/utiles.js";
import { keys } from "../script/keys.js";

var dx = 2;
var dy = -2;

function drawBall(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

const main = () => {
    var this_x = calcenterX();
    var this_y = calcenterY();
    drawBall(this_y, this_x)
}


main()