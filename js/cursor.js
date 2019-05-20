class Cursor {

    constructor() {
        this.x = mouseX;
        this.y = mouseY;
        this.w = 12;
        this.color = color(255, 255, 255);
    }

    show() {
        // mouse cursor
        ellipse(this.x, this.y, 12, 12);
    }

    update() {
        this.x = mouseX;
        this.y = mouseY;
    }

}
