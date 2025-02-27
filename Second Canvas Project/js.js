let canvasElem = document.querySelector("canvas");
let ctx = canvasElem.getContext("2d");
canvasElem.width = window.innerWidth;
canvasElem.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvasElem.width = window.innerWidth;
    canvasElem.height = window.innerHeight;
});

ctx.globalCompositeOperation = "destination-over";

// User input
let numberInput = document.querySelector("input");

let hue = Math.random() * 360;
let number = 0;
let scale = 10;
let multiplier = 0.08;

numberInput.addEventListener("change", animate); // Fix here

function drawing() {
    let angle = number * multiplier;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvasElem.width / 2;
    let positionY = radius * Math.cos(angle) + canvasElem.height / 3;

    ctx.lineWidth = 2;
    ctx.fillStyle = "hsl(" + hue + ", 100%,50%)";
    ctx.beginPath();
    ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue += 0.5;
}

function animate() {
    number = 0; // Reset number on new animation
    multiplier = parseFloat(numberInput.value) || 0.08; // Get input value
    ctx.clearRect(0, 0, canvasElem.width, canvasElem.height); // Clear canvas

    function drawLoop() {
        drawing();
        if (number > 100) return;
        requestAnimationFrame(drawLoop);
    }

    drawLoop();
}

animate();
