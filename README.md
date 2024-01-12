# JavaScript2DGameEng
project for developing a game engine using javaSCRIPT


# basic structure of the scene rendering

**
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

import { calcenterX } from "../script/utiles.js";
import { calcenterY } from "../script/utiles.js";
import { render } from "../script/render.js";
import { drawBall, drawRect } from "../script/drawObg.js";
import { test } from "../script/dinamic.js";


const main = () => {

}

main()
**

# Functions for drawing stationary static objects circle square

application calling syntax (square):
drawBall(x, y, color, ctx)

Executed function (square):
export function drawRect(x, y, color,ctx){
    ctx.beginPath();
    ctx.rect(x, y, 50, 50);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

application calling syntax (ball):
drawRect(x, y, color,ctx)

Executed function (ball):
export function drawBall(x, y, color, ctx){
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

The function takes as parameters the position along the x axis, the position along the y axis, color and the service parameter ctx

More static rendering features will be introduced in the future


# Dynamic Object Rendering Features

in the process of implementation

# Rendering png jpg objects
function call syntax render(x, y, path, ctx)

The function takes as parameters the position along the x axis, the position along the y axis, path and the service parameter ctx
