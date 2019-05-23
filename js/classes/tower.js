class Tower extends Case {

    constructor(x, y, value, level) {
        super(x, y, value);

        this.level = level;
    }

    show() {

        fill(0,0,255);
        rect(this.x*this.w, this.y*this.h, this.w, this.h);
    }


}
