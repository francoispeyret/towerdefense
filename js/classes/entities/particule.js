class Particule {
    constructor(o,v,type) {
        this.p = o;
        this.v = v;

        this.type = type;

        this.opacity = 255;

        if(this.type === 'test') {
            this.w = random(3,15);
        } else if(this.type === 'explosion') {
            this.w = random(3,8);
        } else {
            this.w = 5;
        }
    }

    show() {
        noStroke();
        fill(255,0,0,this.opacity);
        ellipse(this.p.x, this.p.y, this.w, this.w);
    }

    update() {
        if(this.v.x !== 0 && this.v.x !== 0)
            this.p.add(this.v);
        if(this.type === 'explosion') {
            this.w *= 1.05;
            this.opacity = parseInt(this.opacity * 0.95 - 1);
        }
     }

    /**
     * @returns position of particule and check if correctly defined
     */
    getPosition() {
        if(typeof this.p === 'undefined') {
            console.error('Particule avec une position mal déféni...');
            this.p = createVector(0,0);
            return false;
        }
        return this.p;
    }

    isVisible() {
        return  this.opacity > 0 &&
                (this.getPosition().x + this.w < 0 ||
                this.getPosition().x - this.w > width ||
                this.getPosition().y + this.w < 0 ||
                this.getPosition().y - this.w > height);
    }

}
