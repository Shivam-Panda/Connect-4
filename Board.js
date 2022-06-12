class Board {
    colors_1 = []
    colors_2 = []
    colors_3 = [] 
    colors_4 = []

    constructor() {
        this.colors_1 = [255, 0, 0]
        this.colors_2 = [255, 0, 0]
        this.colors_3 = [255, 0, 0]
        this.colors_4 = [255, 0, 0]
    }

    setup() {
        // Bars
        let x = 250;
        fill(this.colors_1[0], this.colors_1[1], this.colors_1[2]);
        rect(x, 250, 100, 400);
        x += 125;
        fill(this.colors_2[0], this.colors_2[1], this.colors_2[2]);
        rect(x, 250, 100, 400);
        x += 125;
        fill(this.colors_3[0], this.colors_3[1], this.colors_3[2]);
        rect(x, 250, 100, 400);
        x += 125;
        fill(this.colors_4[0], this.colors_4[1], this.colors_4[2]);
        rect(x, 250, 100, 400);

        // Holes
        fill(0, 0, 0)
        let z = 300;
        let y = 300;
        for(let j = 0; j < 4; j++) {
            for(let k = 0; k < 4; k++) {
                circle(z, y, 80);
                y += 100;
            }
            z += 125;
            y = 300;
        }

        if(mouseIsPressed) {
            let p = new Piece(mouseX, mouseY);
            p.draw();
        }

        // Hover Positions
        if(mouseY >= 250 && mouseY <= 650) { 
            if(mouseX >= 250 && mouseX <= 350) {
                this.resetColors();
                this.colors_1 = [0, 0, 255];
            } else if(mouseX >= 375 && mouseX <= 475) {
                this.resetColors();
                this.colors_2 = [0, 0, 255];
            } else if(mouseX >= 500 && mouseX <= 600) {
                this.resetColors();
                this.colors_3 = [0, 0, 255];
            } else if(mouseX >= 625 && mouseX <= 725) {
                this.resetColors();
                this.colors_4 = [0, 0, 255];
            }
        }
    }

    resetColors() {
        this.colors_1 = [255, 0, 0]
        this.colors_2 = [255, 0, 0]
        this.colors_3 = [255, 0, 0]
        this.colors_4 = [255, 0, 0]
    }
}