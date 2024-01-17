export class Uliles{

    constructor(){
        // this.x = x;
        // this.y = y;
        // this.color = color;
    }


    calcFps(){
        let prevTime = Date.now(),
        frames = 0;

        requestAnimationFrame(function loop() {
        const time = Date.now();
        frames++;
        if (time > prevTime + 1000) {
            let fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
            prevTime = time;
            frames = 0;
            if(fps < 15){
                console.log('stop')
            }
        }

        requestAnimationFrame(loop);
        });
    }

}