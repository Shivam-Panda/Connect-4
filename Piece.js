class Piece {
    x = 0;
    y = 0;

    constructor(x, y) {
       this.x = x;
       this.y = y; 
    }

    draw() {
        fill(0, 255, 0);
        circle(this.x, this.y, 80);
    }
}