import { Config } from "../config/eng.config.js";
import { Player } from "./player.js";

export class Core{

    constructor(){}

    _Init(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");
        console.log('core start seccess')
        return true;
    }



}