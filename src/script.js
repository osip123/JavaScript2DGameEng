const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

import { fpsMeter } from "../script/functionScripts/FPS.js";
import { Player } from "../script/player.js";

const main = () => {
    fpsMeter();
    Player();
}

main()