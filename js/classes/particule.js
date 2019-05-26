class Particule {
    constructor(o,v,type) {
        this.p = o;
        this.v = v;

        this.type = type;

        if(this.type === 'test') {
            this.w = random(3,15);
        } else {
            this.w = 5;
        }
    }

    show() {
        fill(255,255,0);
        ellipse(this.p.x, this.p.y, this.w, this.w);
    }

    update() {
        //this.p = p5.Vector.lerp(this.p, this.v, 5);
        this.p.add(this.v);

        //let angle = this.p.angleBetween(this.v);
    }

    getPosition() {
        if(typeof this.p === 'undefined') {
            console.error('Particule avec une position mal déféni...');
            this.p = createVector(0,0);
            return false;
        }
        return this.p;
    }

}
