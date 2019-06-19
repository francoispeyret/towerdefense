class Wave extends Stat {

    constructor(name, value, max) {
        super(name, value, max);

        this.spawnCycle = 90;
        this.spawnMax = 10;
        this.spawnCount = 0;
    }

    upadte() {
        if (frameCount % this.spawnCycle === 0) {
            if(this.spawnCount < this.spawnMax) {
                enemies.push(new Enemy(10));
                this.spawnCount++;
            }
        }
    }
}
