class Enemy {

    constructor(life) {

        this.x = -100;
        this.y = -100;
        this.life = life;
        this.cycle = 40;
        this.w    = 75;

        // Init enemy position
        this.findNextPosition(true);
        this.lastMove = {
            x: 0,
            y: 0
        }
    }

    show() {
        fill(0, 200, 0, 30);
        ellipse(this.x, this.y, this.w, this.w);
    }

    update() {
        if (frameCount % this.cycle === 0) {
            this.findNextPosition(false);
        }
    }

    findNextPosition(firstTime) {
        if(firstTime===true) {
            for(let y = 0; y < mapObject.cases.length; y++) {
                for(let x = 0; x < mapObject.cases[y].length; x++) {
                    if (mapObject.cases[y][x].value === 4) {
                        this.x = x * mapObject.w + mapObject.w / 2;
                        this.y = y * mapObject.h + mapObject.h / 2;
                        break;
                    }
                }
            }
        } else {
            let position = createVector(
                Math.floor(this.x / mapObject.w),
                Math.floor(this.y / mapObject.w)
            );
            let doMove = false;
            if(
                (this.lastMove.x !== 0 || this.lastMove.y !== 0) &&
                this.checkCaseOfMapObject(position,this.lastMove)
            ) {
                doMove = true;
            } else if (this.lastMove.y >= 0 && this.checkCaseOfMapObject(position,{x:0,y:1})) {
                this.lastMove.x = 0,
                this.lastMove.y = 1;
                doMove = true;
            } else if (this.lastMove.y <= 0 && this.checkCaseOfMapObject(position,{x:0,y:-1})) {
                this.lastMove.x = 0,
                this.lastMove.y = -1;
                doMove = true;
            } else if (this.lastMove.x <= 0 && this.checkCaseOfMapObject(position,{x:1,y:0})) {
                this.lastMove.x = 1,
                this.lastMove.y = 0;
                doMove = true;
            } else if (this.lastMove.x >= 0 && this.checkCaseOfMapObject(position,{x:-1,y:0})) {
                this.lastMove.x = -1,
                this.lastMove.y = 0;
                doMove = true;
            }
            if(doMove) {
                this.x = (position.x+this.lastMove.x) * mapObject.w + mapObject.w / 2;
                this.y = (position.y+this.lastMove.y) * mapObject.h + mapObject.h / 2;
            }
        }
    }

    checkCaseOfMapObject(currentPos,ciblePos) {
        const x = currentPos.x+ciblePos.x;
        const y = currentPos.y+ciblePos.y;
        if(typeof mapObject.cases[y]!=='undefined' && typeof mapObject.cases[y][x]!=='undefined') {
            return mapObject.cases[y][x].value === 1;
        }
    }

    updateLife(damage) {
        if (this.life > 0) {
            this.life -= damage;
        }
    }
}
