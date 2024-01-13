import { fpsMeter } from "../script/functionScripts/FPS.js";
import { mainRender } from "../script/getcanvas.js";
import { Player } from "../script/player.js";

const main = () => {
    mainRender();
    fpsMeter();
}

main()