class Wave extends Stat {

    constructor(name, value, max) {
        super(name, value, max);

        this.spawnCycle = 45;
        this.spawnMax = 1;
        this.spawnCount = 0;
    }

    update() {
        if (frameCount % this.spawnCycle === 0) {
            if(this.spawnEnemy()) {

            }
            else if(
                this.getWaveEnd() === true &&
                this.value < this.max
            ) {
                this.setNewWave();
            }
            else if (
                this.getWaveEnd() === true &&
                this.value >= this.max
            ) {
                this.getNewStage();
            }
        }
    }

    spawnEnemy() {
        const condition = this.spawnCount < this.spawnMax;
        if(condition) {
            enemies.push(new Enemy(250));
            this.spawnCount++;
        }
        return condition;
    }

    getWaveEnd() {
        if(
            this.spawnEnemy() === false &&
            enemies.length <= 0
        ) {
            return true;
        }
    }

    setNewWave() {
        this.spawnCount = 0;
        this.spawnMax *= 2;
        this.incrementValue(1);
    }

    getNewStage() {
        this.setValue(1);
        this.spawnCount = 0;
        stageObject.incrementValue(1);
    }



}
