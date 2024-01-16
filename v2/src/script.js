import { Core } from "../core/core.js";
import { Player } from "../core/player.js";

const core = new Core;
const player = new Player;

core._Init();
player._Loop();