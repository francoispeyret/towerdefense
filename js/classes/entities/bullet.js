class Bullet extends Particule {
    constructor(o,v,type) {
        super(o,v,type);

        this.w = 5;
    }

    update() {
        this.p.add(this.v);

        if(enemies.length > 0) {
            for(let e = 0; e < enemies.length; e++) {
                // @todo : check if enemy is on bullet position
                break;
            }
        }
    }

}
