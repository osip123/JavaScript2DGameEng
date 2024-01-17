import { Core } from "../core/core.js";
import { Player } from "../core/player.js";
import { Uliles } from "../utiles/Utiles.js";

const core = new Core;
const player = new Player;
const uliles = new Uliles;

core._Init();
player._Loop();
uliles.calcFps();