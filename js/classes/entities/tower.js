class Tower extends Case {

    constructor(x, y, value) {
        super(x, y, value);

        this.life = 100;
        this.attack = 20;
        this.speed = 5;
        this.cycle = 30;

        this.dir = createVector(this.x, this.y);

    }

    show() {
        if (this.hovered) {
            fill(0, 200, 0, 30);
            rect(this.x * this.w, this.y * this.h, this.w, this.h);
        }
        fill(200, 200, 200);
        ellipse(this.x * this.w + this.w / 2, this.y * this.w + this.w / 2, this.w * .5, this.w * .5);

        // lazer
        push();
        stroke(255,0,0);
        strokeWeight(1);
        line(this.x * this.w + this.w / 2, this.y * this.w + this.w / 2, this.dir.x, this.dir.y);
        pop();

    }

    update() {
        this.dir.set(mouseX, mouseY);
        if (frameCount % this.cycle === 0) {
            let origine = createVector(
                this.x * this.w + this.w / 2,
                this.y * this.w + this.w / 2
            );
            let cible = createVector(
                mouseX - origine.x,
                mouseY - origine.y
            );

            particules.push(
                new Particule(
                    origine,
                    cible.limit(this.speed),
                    'test'
                )
            );
        }
    }

}
