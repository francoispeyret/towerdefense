class Cursor {

    constructor() {
        this.x =     mouseX;
        this.y =     mouseY;
        this.w =     12;
        this.color = color(255, 255, 255);
    }

    show() {
        // mouse cursor
        fill(255);
        ellipse(this.x, this.y, this.w, this.w);
    }

    update() {
        this.x = mouseX;
        this.y = mouseY;
    }

    clicked() {
        this.w = 50;

        mapObject.setValueCase(this.x, this.y);

    }

    released() {
        this.w = 12;
    }

}
