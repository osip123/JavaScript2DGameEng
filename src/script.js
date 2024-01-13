const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

import { calcenterX } from "../script/utiles.js";
import { calcenterY } from "../script/utiles.js";
import { render } from "../script/render.js";
import { drawBall, drawRect } from "../script/drawObg.js";
import { test } from "../script/dinamic.js";

var dx = 2;
var dy = -2;

const main = () => {
    var this_x = calcenterX();
    var this_y = calcenterY();

}

main()