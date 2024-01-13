const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

import { fpsMeter } from "../script/functionScripts/FPS.js";

const main = () => {
    fpsMeter();
}

main()