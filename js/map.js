class Map {

    constructor() {
        // [y[x,x,x],y[x,x,x],...]
        this.cases = [
            [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        ];
        this.w = 75;
        this.h = 75;
    }

    show() {

        for(let y = 0; y < this.cases.length; y++) {
            for(let x = 0; x < this.cases[y].length; x++) {
                strokeWeight(0.25);
                if(this.cases[y][x] === 1) {
                    fill(255);
                } else if(this.cases[y][x] === 0) {
                    fill(50);
                } else if(this.cases[y][x] === 2) {
                    fill(255,0,0);
                }
                rect(x*this.w, y*this.h, this.w, this.h);
            }
        }

    }

    setValueCase(x,y) {
        const cibleX = Math.floor(x / this.w);
        const cibleY = Math.floor(y / this.h);

        if(typeof this.cases[cibleY][cibleX] !== 'undefined') {
            this.cases[cibleY][cibleX] = 2;
        }
    }

}
