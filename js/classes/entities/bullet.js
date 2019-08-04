class Bullet extends Particule {
    constructor(o,v,type) {
        super(o,v,type);
        this.id = parseInt(Math.random(100)*100);

        this.w = 15;

        this.damage = random(10,30) * random(1,3);
        this.impact = false;
        this.impactAnimationDuration = 10;
    }

    show() {
        noStroke();
        fill(255,this.impactAnimationDuration*15,0,this.impactAnimationDuration*20+50);
        ellipse(this.p.x, this.p.y, this.w, this.w);
    }

    update() {
        if(this.impact === true) {
            if(this.impactAnimationDuration > 0) {
                this.impactUpdate();
            } else {
                this.destroy();
            }
        } else {
            this.p.add(this.v);
            if(enemies.length > 0) {
                for(let e = 0; e < enemies.length; e++) {
                    if(int(dist(this.p.x, this.p.y, enemies[e].x, enemies[e].y)) < enemies[e].w / 2 - this.w) {
                        enemies[e].updateLife(this.damage);
                        this.impact = true;
                        break;
                    }
                }
            }
        }
    }

    impactUpdate() {
        this.impactAnimationDuration--;
        this.w = map(this.impactAnimationDuration,10,0,5,45);
    }

    destroy() {
        for(let p = 0; p < particules.length; p++) {
            if(
                typeof particules[p] !== 'undefined' &&
                this.id === particules[p].id
            ){
                particules.splice(p,1);
                p--;
                break;
            }
        }
    }

}
