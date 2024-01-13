
var frame = document.getElementById("farme");

// console.log(frame)

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

        frame.textContent = fps;
      }

      requestAnimationFrame(loop);
    });
  }
  