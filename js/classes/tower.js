class Tower extends Case {

  constructor(x,y,value) {
    super(x,y,value);

    this.life   = 100;
    this.attack = 20;
    this.speed  = 5;
    this.cycle  = 30;

    this.center = createVector(
        this.x * this.w + this.w / 2,
        this.y * this.w + this.w / 2,
    );

    this.cible = createVector(0,0);

  }

  show() {

    fill(200,200,200);
    ellipse(this.center.x, this.center.y, this.w * .5, this.w * .5);

    push();
    stroke(255);
    strokeWeight(2);
    translate(this.center.x, this.center.y);
    let v1 = createVector(this.center.x,this.center.y);
    let v2 = createVector(this.cible.x,this.cible.y);
    let angle = v1.angleBetween(v2);
    console.log(degrees(angle));
    rotate(angle);
    line(0,0,50,0);
    pop();

  }

  update() {
    this.cible.set(mouseX - this.center.x, mouseY - this.center.y)
    if (frameCount % this.cycle === 0) {
        const origine = createVector(this.center.x,this.center.y);
        const cible = createVector(this.cible.x,this.cible.y);

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
