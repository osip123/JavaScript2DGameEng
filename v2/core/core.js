import { Config } from "../config/eng.config.js";
import {  Player } from "./player.js";
import { Uliles } from "../utiles/Utiles.js";

export class Core{

    constructor(){}

    _Init(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");
        console.log('core start seccess')
        return true;
    }
}

export function CoreStart(){
    const core = new Core();
    core._Init();
    const Util = new Uliles();
    Util.calcFps();
    const player = new Player();
    player._InitPlayer();
}