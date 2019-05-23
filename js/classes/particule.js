class Particule {
    constructor(x,y,v,type) {
        this.p = createVector(x,y);
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
        this.p.add(this.v);
    }

    getPosition() {
        return this.p;
    }

}
