

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


        window.onkeydown = move = (e) => {
            let key = e.keyCode;
            if     (key === 68 && player.x <= canvas.width-25) {player.x += 10;} //right
            else if(key === 65 && player.x >= 10) {player.x -= 10;} //left
            else if(key === 83 && player.y <= canvas.height-25) {player.y += 10;} //down
            else if(key === 87 && player.y >= 10) {player.y -= 10;} //up
          
            ctx.clearRect(0,0, canvas.width, canvas.height);
            ctx.fillRect(player.x, player.y, player.w, player.h);
          }





        x: Number = 100;
        y: Number = 100;
        ctx.beginPath();
        ctx.rect(100, 100, player.w, player.h);
        ctx.fillStyle = '#FFF';
        ctx.fill();
        ctx.closePath();
        console.log('player')
    }

    drawPlayer();
    console.log('work')
}