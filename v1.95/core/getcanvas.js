import {config} from '../config/config.js'
export const mainRender = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    setInfo();
}

function setInfo(){
    console.log(config.author)
    console.log(config.engainv)
}