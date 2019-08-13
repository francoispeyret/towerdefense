class Tower extends Case {

    constructor(x, y, value, level) {
        super(x, y, value);

        this.level = level;
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
        const waving = map(sin(frameCount/10), 0, 1, -0.66, 0.66);
        ellipse(this.center.x, this.center.y + waving, this.w * .5, this.w * .5);

        fill(30);
        textAlign(CENTER);
        textSize(12);
        text(this.level, this.center.x, this.center.y + waving);
    }

    update() {
        if (frameCount % this.cycle === 0) {

            let origine = this.center.copy();
            let target = this.findEnemy(origine);

            if(typeof target.x !== 'undefined') {
                this.dir.set(target.x * this.w + this.w / 2, target.y * this.w + this.w / 2);
                let damage = {
                    min: 5 * (this.level / 5 + 1),
                    max: 15 * (this.level / 5 + 1),
                    mult: 2.5 * (this.level / 5 + 1)
                }
                particules.push(
                    new Bullet(
                        origine,
                        target.limit(this.speed),
                        'test',
                        {min: damage.min, max: damage.max, mult: damage.mult}
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

    upgrade() {
        if(this.level > 0 && this.level < 5) {
            this.level += 1;
            return true;
        }
        return false;
    }

}
