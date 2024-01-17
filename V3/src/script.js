import { Player } from "../core/player/player.js";


function init(){
    const path = "../assetes/player.png";

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext("2d");

    var player1 = new Player(canvas.width / 2, canvas.height / 2, context, path);

    player1.update();
}

init()

setInterval(init(), 1000/60)