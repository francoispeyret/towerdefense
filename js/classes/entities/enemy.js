class Enemy {

    constructor(life) {

        this.id = parseInt(Math.random(850)*1540);
        this.x = -100;
        this.y = -100;
        this.w    = 50;
        this.cycle = 40;
        this.life = life;
        this.lifeMax = life;
        this.timingLife = parseInt(random(0,30));

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

        this.waving = 0;
    }

    show() {
        noStroke();
        if(this.life < 1) {
            fill(255, 0, 0);
        } else {
            fill(0,200,0,);
        }
        ellipse(this.x + this.waving, this.y + this.waving, this.w, this.w);

        // barre de vie
        noFill();
        strokeWeight(4);
        if(this.life > 1) {
            if(this.life < this.lifeMax / 5)
                stroke(255,0,0);
            else if(this.life < this.lifeMax / 2)
                stroke(225,200,0);
            else
                stroke(0,255,0);
            arc(
                this.x + this.waving,this.y + this.waving,this.w,this.w,
                0,
                map(this.life, 0, this.lifeMax, 0, TWO_PI),
                OPEN
            );
        }
    }

    update() {
        if (frameCount % this.cycle === 0) {
            this.findNextPosition(false);
            //this.x = (this.lastMove.x + this.nextMove.x) * mapObject.w + mapObject.w / 2;
            //this.y = (this.lastMove.y + this.nextMove.y) * mapObject.h + mapObject.h / 2;
        }
        this.animeMove();
        this.waving = map(sin(this.timingLife/10), 0, 1, -2, 2);
        this.timingLife++;
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
            this.lastMove = createVector(
                Math.floor(this.x / mapObject.w),
                Math.floor(this.y / mapObject.h)
            );
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
                for(let x = 0; x < random(4,7); x++) {
                    particules.push(new Particule(
                        createVector(this.x,this.y),
                        createVector(random(-2,2),random(-2,2)),
                        'explosion'
                    ));
                }
                enemies.splice(e,1);
                coinObject.incrementValue(this.lifeMax);
                //break;
            }
        }
    }
}
