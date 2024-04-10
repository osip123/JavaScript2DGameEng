import { fpsMeter } from "../../../script/functionScripts/FPS.js"
import { mainRender } from "../../../core/getcanvas.js";

const main = () => {
    mainRender();
    fpsMeter();
}

main()