class Case {

    constructor(x,y,value) {
        this.x = x;
        this.y = y;
        this.w = 75;
        this.h = 75;

        this.value = value || 0;

        this.hovered = false;
    }

    show() {

        stroke(0);
        strokeWeight(0.25);

        if(this.value === 1) {
            fill(255);
        } else if(this.value === 0) {
            fill(50);
        } else if(this.value === 2) {
            fill(255,0,0);
        }
        rect(this.x*this.w, this.y*this.h, this.w, this.h);


        if(this.hovered) {
            fill(0,200,0,120);
            rect(this.x*this.w, this.y*this.h, this.w, this.h);
        }
    }

    setValue(val) {
        this.value = val;
    }

    setHover(state) {
        this.hovered = state;
    }

}
