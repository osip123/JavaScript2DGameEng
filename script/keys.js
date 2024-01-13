
document.addEventListener("keydown", keyDownHandler(), false);
document.addEventListener("keyup", keyUpHandler(), false);

console.log("key 1")

export const keys = () => {
    function keyDownHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
          rightPressed = true;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
          leftPressed = true;
        }
console.log("key 2")

      }
      
      function keyUpHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
          rightPressed = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
          leftPressed = false;
        }
      }
      console.log("key 3")

}


function move(){
  document.onkeydown = (e) => {
    if (e.keyCode == 37) yoshi.style.left = parseInt(getComputedStyle(yoshi).left) - 5 + "px";
    else if (e.keyCode == 38) yoshi.style.top = parseInt(getComputedStyle(yoshi).top) - 5 + "px";
    else if (e.keyCode == 39) yoshi.style.left = parseInt(getComputedStyle(yoshi).left) + 5 + "px";
    else if (e.keyCode == 40) yoshi.style.top = parseInt(getComputedStyle(yoshi).top) + 5 + "px";
  };
}


