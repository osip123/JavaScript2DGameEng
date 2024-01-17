export class FightPlayer{

    constructor(X_pos, Y_pos, ctx, path){
        this.X_pos = X_pos;
        this.Y_pos = Y_pos;
        this.ctx = ctx;
        path = this.path;

        this.keys = []

        this.keyMap = new Map();
        document.addEventListener("mousemove", (event => {
          this.cursorPosition.x = event.clientX;
          this.cursorPosition.y = event.clientY;
        }));

        document.addEventListener("keydown", (event) => this.keyMap.set(event.code, true));
        document.addEventListener("keyup", (event) => this.keyMap.delete(event.code));

        window.addEventListener("keydown", function(e) {
            this.keys[e.keyCode] = true;
    
            if(keys[37] == true){
    
            }
        })

        window.addEventListener("keyup", function(e) {
            this.keys[e.keyCode] = false;
        })
    }

    _Init(){

    }

    _Update(){
        if(this.keys[65] == true){
            this.X_pos = this.X_pos - 10;
        }
        if(this.keys[87] == true){
            this.Y_pos = this.Y_pos - 10;
        }
        if(this.keys[68] == true){
            this.X_pos = this.X_pos + 10;
        }
        if(this.keys[83] == true){
            this.X_pos = this.X_pos - 10;
        }
    }
    _Loop(){

    }
    _Render(){

    }

}