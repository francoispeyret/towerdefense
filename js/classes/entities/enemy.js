class Enemy {

    constructor(life) {

        this.id = parseInt(Math.random(100)*100);
        this.x = -100;
        this.y = -100;
        this.w    = 50;
        this.cycle = 40;
        this.life = life;
        this.lifeMax = life;

        // Init enemy position
        this.findNextPosition(true);
        this.doMove = false;
        this.nextMove = {
            x: 0,
            y: 0
        };
        this.lastMove = {
            x: Math.floor(this.x / mapObject.w),
            y: Math.floor(this.y / mapObject.h)
        }
    }

    show() {
        noStroke();
        fill(0, 150, 0);
        ellipse(this.x, this.y, this.w, this.w);

        // barre de vie
        noFill();
        strokeWeight(4);
        if(this.life > 0)
            stroke(0,255,0);
        else
            stroke(255,0,0);
        arc(
            this.x,this.y,this.w,this.w,
            0,
            map(this.life, 0, this.lifeMax, 0, TWO_PI),
            OPEN
        );
    }

    update() {
        if (frameCount % this.cycle === 0) {
            this.findNextPosition(false);
            //this.x = (this.lastMove.x + this.nextMove.x) * mapObject.w + mapObject.w / 2;
            //this.y = (this.lastMove.y + this.nextMove.y) * mapObject.h + mapObject.h / 2;
        }
        this.animeMove();
        this.updateLife(1);
    }

    animeMove() {
        if(this.nextMove.y > 0) {
            this.y += mapObject.w/this.cycle;
        }
        if(this.nextMove.y < 0) {
            this.y -= mapObject.w/this.cycle;
        }
        if(this.nextMove.x > 0) {
            this.x += mapObject.h/this.cycle;
        }
        if(this.nextMove.x < 0) {
            this.x -= mapObject.h/this.cycle;
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
            this.lastMove = {
                x: Math.floor(this.x / mapObject.w),
                y: Math.floor(this.y / mapObject.h)
            };
            this.doMove = false;
            if(
                (this.nextMove.x !== 0 || this.nextMove.y !== 0) &&
                this.checkCaseOfMapObject(position,this.nextMove)
            ) {
                this.doMove = true;
            } else if (this.nextMove.y >= 0 && this.checkCaseOfMapObject(position,{x:0,y:1})) {
                this.nextMove.x = 0;
                this.nextMove.y = 1;
                this.doMove = true;
            } else if (this.nextMove.y <= 0 && this.checkCaseOfMapObject(position,{x:0,y:-1})) {
                this.nextMove.x = 0;
                this.nextMove.y = -1;
                this.doMove = true;
            } else if (this.nextMove.x <= 0 && this.checkCaseOfMapObject(position,{x:1,y:0})) {
                this.nextMove.x = 1;
                this.nextMove.y = 0;
                this.doMove = true;
            } else if (this.nextMove.x >= 0 && this.checkCaseOfMapObject(position,{x:-1,y:0})) {
                this.nextMove.x = -1;
                this.nextMove.y = 0;
                this.doMove = true;
            } else {
                this.nextMove.x = 0;
                this.nextMove.y = 0;
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
        } else {
            this.die();
        }
    }

    die() {
        for(let e = 0; e < enemies.length; e++) {
            if(
                typeof enemies[e] !== 'undefined' &&
                this.id === enemies[e].id
            ){
                enemies.splice(e,1);
                break;
            }
        }
    }
}
