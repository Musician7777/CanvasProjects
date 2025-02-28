const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    draw();
});

//Variables
let positionX = 40;
let positionY = canvas.height / 2;
let angle = 0;
let hue = 0;

//Drawing
let draw = () => {
    ctx.beginPath();
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.arc(positionX,(Math.sin(angle) * 50) + positionY, 10, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
}
draw();

function drawLine() {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.moveTo(positionX, positionY);
    ctx.lineTo(positionX + 100, positionY);
    ctx.stroke();
    ctx.closePath();
}

//Animation
let animate = () => {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    drawLine();
    positionX += 1;
    angle += 0.09;
    hue += 1;
    if(positionX > canvas.width - 40) return;
    requestAnimationFrame(animate);

    //console.log((Math.sin(angle) * 20));
}
animate(); 