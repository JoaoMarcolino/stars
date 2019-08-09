const stars = [];
const amountStar = 1000;
let speed;


function setup() {
    createCanvas(800, 800);
    for (i = 0; i < amountStar; i++) {
        stars.push(new Star());
    }
}

function draw() {
    speed = map(mouseX, 0, width, 0, 50);
    background(0);
    translate(width/2, height/2);
    for (i = 0; i < amountStar; i++) {
        stars[i].update();
        stars[i].show();
    }
}