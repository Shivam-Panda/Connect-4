class Piece {
    x = 0;
    y = 0;

    turn = true;

    constructor(x, y, turn) {
       this.x = x;
       this.y = y; 
       this.turn = turn;
    }

    draw() {
        if(this.turn) {
            fill(0, 255, 0);
        } else {
            fill(255, 255, 255);
        }
        circle(this.x, this.y, 80);
    }
}