export function drawBall(x, y, color, ctx){
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

export function drawRect(x, y, color,ctx){
    ctx.beginPath();
    ctx.rect(x, y, 50, 50);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
