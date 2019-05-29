class Enemy {

    constructor(life) {

        this.x = -100;
        this.y = -100;
        this.life = life;
        this.w    = 75;

        // Init enemy position
        for(let y = 0; y < mapObject.cases.length; y++) {
            for(let x = 0; x < mapObject.cases[y].length; x++) {
                if (mapObject.cases[y][x].value === 4) {
                    this.x = x *  mapObject.w + mapObject.w / 2;
                    this.y = y *  mapObject.h + mapObject.h / 2;
                }
            }
        }
    }

    show() {
        fill(0, 200, 0, 30);
        ellipse(this.x, this.y, this.w, this.w);
    }

    updateLife(damage) {
        if (this.life > 0) {
            this.life -= damage;
        }
    }
}
