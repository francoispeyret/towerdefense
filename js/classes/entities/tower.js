class Tower extends Case {

    constructor(x, y, value) {
        super(x, y, value);

        this.life = 100;
        this.attack = 20;
        this.speed = 5;
        this.cycle = 15;
        this.anticipation = this.speed * (this.cycle/2);
        this.attackDistance = this.w*3;

        this.dir = this.center.copy();

    }

    show() {
        if (this.hovered) {
            strokeWeight(2);
            stroke(0, 100, 200);
            fill(0, 100, 200, 30);
            rect(this.x * this.w, this.y * this.h, this.w, this.h);
        }
        noStroke();
        fill(200, 200, 200);
        ellipse(this.center.x, this.center.y, this.w * .5, this.w * .5);

        /*
        // lazer
        push();
        stroke(255,0,0);
        strokeWeight(1);
        line(this.x * this.w + this.w / 2, this.y * this.w + this.w / 2, this.dir.x, this.dir.y);
        pop();
        */
    }

    update() {
        if (frameCount % this.cycle === 0) {

            let origine = this.center.copy();
            let target = this.findEnemy(origine);

            if(typeof target.x !== 'undefined') {
                this.dir.set(target.x * this.w + this.w / 2, target.y * this.w + this.w / 2);
                particules.push(
                    new Bullet(
                        origine,
                        target.limit(this.speed),
                        'test'
                    )
                );
            } else {
                this.dir.set(origine.x, origine.y);
            }
        }
    }

    findEnemy(ori) {
        if(enemies.length) {
            for(let e = 0; e < enemies.length; e++) {
                let enemyPos   = createVector(enemies[e].x,enemies[e].y);
                let currentPos = createVector(this.x * this.w + this.w / 2,this.y * this.w + this.w / 2);
                let distance   = currentPos.dist(enemyPos);
                if (distance < this.attackDistance) {
                    return createVector(
                        enemies[e].x + enemies[e].nextMove.x*this.anticipation - ori.x,
                        enemies[e].y + enemies[e].nextMove.y*this.anticipation - ori.y
                    );
                }
            }
        }
        return false;
    }

}
