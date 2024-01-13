const player = {
    w: 50,
    h: 50,
    max_speed: 400,
    health: 100,
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


export function Player(){
    var x = canvas.width/2;
    var y = canvas.height-30;
    // var t = canvas.height/2;
    // var b = canvas.width-30;
    var paddleHeight = 10;
    var paddleWidth = 75;
    var dx = 2;
    var dy = -2;
    var dt = 2;
    var db = -2;
    var paddleX = (canvas.width-paddleWidth)/2;
    var paddleY = 100;
    var rightPressed = false;
    var leftPressed = false;
    var topPressed = false;
    var bottomPressed = false;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if(e.key === "d") {
            rightPressed = true;
        }
        else if(e.key === "a") {
            leftPressed = true;
        }
        else if(e.key === "w"){
            topPressed = true;
        }
        else if(e.key === "s"){
            bottomPressed = true;
        }
    }
    
    function keyUpHandler(e) {
        if(e.key === "d") {
            rightPressed = false;
        }
        else if(e.key === "a") {
            leftPressed = false;
        }
        // else if(e.key === "w"){
        //     topPressed = false;
        // }
        // else if(e.key === "s"){
        //     bottomPressed = false;
        // }
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath()
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPaddle();
        
        if(rightPressed) {
            paddleX += 7;
        }
        else if(leftPressed) {
            paddleX -= 7;
        }

        // else if(topPressed){
        //     paddleY =+ 7;
        // }

        // else if(bottomPressed){
        //     paddleY -= 7;
        // }
        
        x += dx;
        y += dy;

    }
    
    setInterval(draw, 10);
}