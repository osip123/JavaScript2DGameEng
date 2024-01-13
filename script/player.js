

const player = {
    w: 50,
    h: 50,
    max_speed: 400,
    health: 100,
}

export function Player(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    function drawPlayer(){
        x: Number = 100;
        y: Number = 100;
        ctx.beginPath();
        ctx.rect(100, 100, player.w, player.h);
        ctx.fillStyle = '#FFF';
        ctx.fill();
        ctx.closePath();
        console.log('player')
        x += 20;
        y += 20;
    }

    drawPlayer();
    console.log('work')
}