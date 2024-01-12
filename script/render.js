const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export function render(x, y, path, ctx){
    var img = new Image();
    img.src = path; 
    ctx.drawImage(img, x, y);
}