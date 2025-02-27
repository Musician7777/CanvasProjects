let canvasElement = document.querySelector("canvas");
let ctx = canvasElement.getContext('2d');
const arrParticles = [];
let hue = 0;

canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

console.log(ctx);

window.addEventListener("resize",function(){
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined
}

canvasElement.addEventListener("click",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 1; i <= 10; i++){
        arrParticles.push(new particle());
    }
})
canvasElement.addEventListener("mousemove",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 1; i <= 3; i++){
        arrParticles.push(new particle());
    }
})
function drawing(xCord,yCord,radius,color){
    ctx.fillStyle = color;
    //ctx.strokeStyle = "red"
    //ctx.lineWidth = "5"
    ctx.beginPath();
    ctx.arc(xCord,yCord,radius,0,Math.PI * 2);
    ctx.fill();
    //ctx.stroke();
}
console.log();
class particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        //this.x = Math.random() * canvasElement.width;
        //this.y = Math.random() * canvasElement.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        drawing(this.x,this.y,this.size,this.color);
    }
}
//Not in use
function particleGenerator(){
    for(let i = 0; i < 100; i++ ){
        arrParticles.push(new particle());
    }
}

function updater(){
    for(let i = 0; i < arrParticles.length; i++ ){
        arrParticles[i].update();
        arrParticles[i].draw();
        for(let j = i; j < arrParticles.length; j++){
            let dx = arrParticles[i].x - arrParticles[j].x;
            let dy = arrParticles[i].y - arrParticles[j].y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            if(distance < 100){
                ctx.beginPath();
                ctx.strokeStyle = arrParticles[i].color;
                ctx.lineWidth = arrParticles[i].size / 14;
                ctx.moveTo(arrParticles[i].x, arrParticles[i].y);
                ctx.lineTo( arrParticles[j].x, arrParticles[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }

        if(arrParticles[i].size <= 0.3){
            arrParticles.splice(i, 1);
            //console.log(arrParticles.length);
            i--;
        }
    }
}

function animate(){
    ctx.clearRect(0,0,canvasElement.width,canvasElement.height);
    //ctx.fillStyle = "rgba(0,0,0,0.02)";
    //ctx.fillRect(0,0,canvasElement.width,canvasElement.height);
    updater();
    hue += 0.5;
    requestAnimationFrame(animate);
}
animate();