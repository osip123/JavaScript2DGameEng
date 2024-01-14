import { report } from "../report/report.js";

var frame = document.getElementById("farme");

export function fpsMeter() {
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
          report();
        }
        frame.textContent = fps;
      }

      requestAnimationFrame(loop);
    });
  }
  