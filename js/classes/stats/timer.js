class Timer {

    constructor(min, value) {
        this.min = min;
        this.value = value;
    }

    show() {

        text(this.value, width /2, 100);
        textAlign(LEFT);
        textSize(32);

        if (frameCount % 60 === 0) {

            this.incrementValue(1);
        }
    }

    incrementValue(increment) {
        this.value += increment;
    }
}
