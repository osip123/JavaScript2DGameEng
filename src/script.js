const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

import { calcenterX, calcenterY} from "../script/utiles.js";
import { render } from "../script/render.js";
import { drawBall } from "../script/drawObg.js";
import { Player } from "../script/player.js";

var dx = 2;
var dy = -2;

const main = () => {

    for(var i = 0; i < 90; i++){
        x = x + 20;
        drawBall(x, y, '#FFF', ctx);
    }
}

main()