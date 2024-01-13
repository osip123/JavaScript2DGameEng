
var frame = document.getElementById("farme");

console.log(frame)


export function getFps(){
        let frameCount = function _fc(timeStart){
            
            let now = performance.now();
            let duration = now - timeStart;
            
            if(duration < 100){
                
                _fc.counter++;
                
            } else {
                        
                _fc.fps = _fc.counter * 10;
                _fc.counter = 0;
                timeStart = now; 
                console.log(_fc.fps);

            }
            requestAnimationFrame(() => frameCount(timeStart)); 
        }

    frameCount.counter = 0;
    frameCount.fps = 0;

    frameCount(performance.now())

    console.log(frameCount)
}