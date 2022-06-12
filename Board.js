class Board {
    colors_1 = []
    colors_2 = []
    colors_3 = [] 
    colors_4 = []
    colors_5 = []
    colors_6 = []

    bar_1 = [];
    bar_2 = [];
    bar_3 = [];
    bar_4 = [];
    bar_5 = [];
    bar_6 = [];

    count = 0
    turn = true;

    constructor() {
        this.count = 0;
        this.turn = true;

        this.bar_1 = [];
        this.bar_2 = [];
        this.bar_3 = [];
        this.bar_4 = [];
        this.bar_5 = [];
        this.bar_6 = [];

        this.colors_1 = [255, 0, 0]
        this.colors_2 = [255, 0, 0]
        this.colors_3 = [255, 0, 0]
        this.colors_4 = [255, 0, 0]
        this.colors_5 = [255, 0, 0]
        this.colors_6 = [255, 0, 0]
    }

    draw() {
        // Bars
        let x = 100;
        let height = 600
        fill(this.colors_1[0], this.colors_1[1], this.colors_1[2]);
        rect(x, 250, 100, height);
        x += 125;
        fill(this.colors_2[0], this.colors_2[1], this.colors_2[2]);
        rect(x, 250, 100, height);
        x += 125;
        fill(this.colors_3[0], this.colors_3[1], this.colors_3[2]);
        rect(x, 250, 100, height);
        x += 125;
        fill(this.colors_4[0], this.colors_4[1], this.colors_4[2]);
        rect(x, 250, 100, height);
        x += 125;
        fill(this.colors_5[0], this.colors_5[1], this.colors_5[2]);
        rect(x, 250, 100, height);
        x += 125;
        fill(this.colors_6[0], this.colors_6[1], this.colors_6[2]);
        rect(x, 250, 100, height);

        // Holes
        fill(0, 0, 0)
        let z = 150;
        let y = 300;
        for(let j = 0; j < 6; j++) {
            for(let k = 0; k < 6; k++) {
                circle(z, y, 80);
                y += 100;
            }
            z += 125;
            y = 300;
        }

        for(let i = 0; i < this.bar_1.length;i++) {
            this.bar_1[i].draw();
        }
        for(let i = 0; i < this.bar_2.length; i++) {
            this.bar_2[i].draw();
        }
        for(let i = 0; i < this.bar_3.length; i++) {
            this.bar_3[i].draw();
        } 
        for(let i = 0; i < this.bar_4.length;i++) {
            this.bar_4[i].draw();
        } 
        for(let i = 0; i < this.bar_5.length;i++) {
            this.bar_5[i].draw();
        }
        for(let i = 0; i < this.bar_6.length;i++) {
            this.bar_6[i].draw();
        }

        // Hover Positions
        if(mouseY >= 250 && mouseY <= 650) { 
            if(mouseX >= 100 && mouseX <= 200) {
                this.resetColors();
                this.colors_1 = [0, 0, 255];
            } else if(mouseX >= 225 && mouseX <= 325) {
                this.resetColors();
                this.colors_2 = [0, 0, 255];
            } else if(mouseX >= 350 && mouseX <= 450) {
                this.resetColors();
                this.colors_3 = [0, 0, 255];
            } else if(mouseX >= 475 && mouseX <= 575) {
                this.resetColors();
                this.colors_4 = [0, 0, 255];
            } else if(mouseX >= 600 && mouseX <= 700) {
                this.resetColors();
                this.colors_5 = [0, 0, 255];
            } else if(mouseX >= 725 && mouseX <= 825) {
                this.resetColors();
                this.colors_6 = [0, 0, 255];
            }
        }
    }

    mouseClicked() {
        if(this.count % 2 == 0) {
            this.turn = true;
        } else {
            this.turn = false;
        }
        if(mouseY >= 250 && mouseY <= 650) { 
            let x = 150;
            if(mouseX >= 100 && mouseX <= 200) {
                if(this.bar_1.length < 6) {
                let len = this.bar_1.length;
                let y = 800 - 100 * (len);
                let p = new Piece(x, y, this.turn);
                this.bar_1.push(p);
                }
            } else if(mouseX >= 225 && mouseX <= 325) {
                // Bar 2
                if(this.bar_2.length < 6) {
                let len = this.bar_2.length;
                x = 150 + 125;
                let y = 800 - 100 * (len);
                let p = new Piece(x, y, this.turn);
                this.bar_2.push(p);
                }
            } else if(mouseX >= 350 && mouseX <= 450) {
                // Bar 3
                if(this.bar_3.length < 6) {
                let len = this.bar_3.length;
                x = 150 + (125 * 2);
                let y = 800 - 100 * (len);
                let p = new Piece(x, y, this.turn);
                this.bar_3.push(p);
                }
            } else if(mouseX >= 475 && mouseX <= 575) {
                // Bar 4
                if(this.bar_4.length < 6) {
                let len = this.bar_4.length;
                x = 150 + (125 * 3);
                let y = 800 - 100 * (len);
                let p = new Piece(x, y, this.turn);
                this.bar_4.push(p);
                }
            } else if(mouseX >= 600 && mouseX <= 700) {
                // Bar 5
                if(this.bar_5.length < 6) {
                let len = this.bar_5.length;
                x = 150 + (125 * 4);
                let y = 800 - 100 * (len);
                let p = new Piece(x, y, this.turn);
                this.bar_5.push(p);
                }
            } else if(mouseX >= 725 && mouseX <= 825) {
                // Bar 6
                if(this.bar_6.length < 6) {
                let len = this.bar_6.length;
                x = 150 + (125 * 5);
                let y = 800 - 100 * (len);
                let p = new Piece(x, y, this.turn);
                this.bar_6.push(p);
                }
            }
        }
        this.count++;
    }

    resetColors() {
        this.colors_1 = [255, 0, 0]
        this.colors_2 = [255, 0, 0]
        this.colors_3 = [255, 0, 0]
        this.colors_4 = [255, 0, 0]
        this.colors_5 = [255, 0, 0]
        this.colors_6 = [255, 0, 0]
    }
}