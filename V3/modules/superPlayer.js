

export function syperPlayer(){
    var X_pos = 0;
    var Y_pos = 0;
    var player_size = 25;
    var keys = []; 

    const playerConfig = {
        speed: 10,
        health: 10,
        id: 83954287,
        player_size: 15,
    }

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    window.addEventListener("keydown", function(e) {
        keys[e.keyCode] = true;

        if(keys[37] == true){

        }
    })

    window.addEventListener("keyup", function(e) {
        keys[e.keyCode] = false;
    })

    function Init(){
        X_pos = 400;
        Y_pos = 200;
        console.log(X_pos, Y_pos);
    }

    function Loop(){
        updatedPlayer();
        renderPlayer();
        console.log('player: rese')
    }

    function updatedPlayer() {
        if(keys[65] == true){
            X_pos = X_pos - playerConfig.speed;
        }
        if(keys[87] == true){
            Y_pos = Y_pos - playerConfig.speed;
            console.log(Y_pos);
        }
        if(keys[68] == true){
            X_pos = X_pos + playerConfig.speed;
            console.log(X_pos);
        }
        if(keys[83] == true){
            Y_pos = Y_pos + playerConfig.speed;
            console.log(Y_pos);
        }
    }

    function renderPlayer(){
        ctx.clearRect(0, 0, 10000, 10000)
        ctx.fillRect(X_pos, Y_pos, playerConfig.player_size, playerConfig.player_size);
    }

    window.setInterval(Loop, 1000/60);
    console.log(playerConfig.id, playerConfig.speed)
    Init();
}