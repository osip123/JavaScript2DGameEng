const playerConfig = {
    w: 25,
    h: 25,
    speed: 20,
    health: 100,
}

export class Player{

    constructor(){}

    _InitPlayer(){}

    _UpdatePlayer(){}

    _RenderPlayer(){}

    _Loop(){
        this._InitPlayer();
        this._UpdatePlayer();

        return true;
    }
}

// window.setInterval(_Loop(), 1000/60)