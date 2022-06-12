let b;

function setup() {
    createCanvas(1000, 1000);
    b = new Board();
}

function draw() {
    background(0, 0, 0);
    
    b.draw();
}

function mouseClicked() {
    b.mouseClicked();
}