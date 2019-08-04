class Case {

    constructor(x,y,value) {
        this.x = x;
        this.y = y;
        this.w = 75;
        this.h = this.w;

        this.value = value || 0;

        this.hovered = false;


        this.center = createVector(
            this.x * this.w + this.w / 2,
            this.y * this.h + this.h / 2
        );
    }

    show() {

        noStroke();
        noFill();
        if(this.value === 1 || this.value === 4) {
            fill(50);
        } else if(this.value === 2) {
            fill(255,0,0);
        }
        rect(this.x*this.w, this.y*this.h, this.w, this.h);


        if(this.hovered) {
            strokeWeight(2);
            if(this.value===0) {
                stroke(0,200,0,200);
                fill(0,200,0,30);
            }
            else {
                stroke(0,0,0,30);
                fill(0,0,0,15);
            }
            rect(this.x*this.w + 1, this.y*this.h + 1, this.w - 2, this.h - 2);
        }
    }

    update() {
        // Only for Tower by default
    }

    setValue(val) {
        if(this.value===0) {
            this.value = val;
        }
    }

    setHover(state) {
        this.hovered = state;
    }

}
