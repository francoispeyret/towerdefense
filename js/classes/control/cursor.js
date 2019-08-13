class Cursor {

    constructor() {
        this.x =     mouseX;
        this.y =     mouseY;
        this.enabled = false;
        this.placeTowerLevelCurrent = null;
    }

    show() {

    }

    update() {
        this.x = mouseX;
        this.y = mouseY;
    }

    pressed() {
    }

    released() {
        if(this.enabled===true) {
            this.enabled = false;
            mapObject.setNoHoverCase();
            removeActiveBuying();
            const level = this.placeTowerLevelCurrent;
            if(getPrice(level) <= coinObject.value && coinObject.value > 0) {
                if(typeof mapObject !== 'undefined') {
                    if(mapObject.setValueCase(this.x, this.y, 2, level)) {
                        coinObject.incrementValue(-getPrice(level));
                    }
                }
            }
        }
    }

    moved() {
        if(this.enabled===true) {
            if(typeof mapObject !== 'undefined')
                mapObject.setHoverCase(this.x, this.y);
        }
    }

    dragged() {
        this.moved();
    }

    placeTower(level) {
        if(getPrice(level) <= coinObject.value && coinObject.value>0) {
            this.enabled = true;
            this.placeTowerLevelCurrent = level;
        }
    }

}
