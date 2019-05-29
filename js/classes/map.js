class Map {

    constructor() {
        // [y[x,x,x],y[x,x,x],...]
        this.cases = [
            [0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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

    init() {
        for(let y = 0; y < this.cases.length; y++) {
            for(let x = 0; x < this.cases[y].length; x++) {
                this.cases[y][x] = new Case(x,y,this.cases[y][x]);
            }
        }
    }

    show() {
        for(let y = 0; y < this.cases.length; y++) {
            for(let x = 0; x < this.cases[y].length; x++) {
                this.cases[y][x].show();
                this.cases[y][x].update();
            }
        }
    }

    getCibleCoor(x,y) {
        return {
            x: Math.floor(x / this.w) >= 0 && Math.floor(x / this.w) < this.cases[0].length ? Math.floor(x / this.w) : false,
            y: Math.floor(y / this.h) >= 0 && Math.floor(y / this.h) < this.cases.length ? Math.floor(y / this.h) : false
        };
    }

    setValueCase(x,y,value) {
        const cible = this.getCibleCoor(x,y);
        if(cible.x !== false && cible.y !== false) {
            if(value===2 && typeof this.cases[cible.y][cible.x].value !== 'undefined' && this.cases[cible.y][cible.x].value === 0) {
                this.cases[cible.y][cible.x] = new Tower(cible.x, cible.y, value);
            }
        }
    }

    setHoverCase(x,y) {
        const cible = this.getCibleCoor(x,y);
        for(let y = 0; y < this.cases.length; y++) {
            for(let x = 0; x < this.cases[y].length; x++) {
                this.cases[y][x].setHover(false);
            }
        }
        if(cible.x !== false && cible.y !== false) {
            if(typeof this.cases[cible.y][cible.x].hovered !== 'undefined') {
                this.cases[cible.y][cible.x].setHover(true);
            }
        }
    }

}
