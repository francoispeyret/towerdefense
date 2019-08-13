class Mapping {

    constructor() {
        this.levelsFilesUrl = './levels.json';
        this.cases = null;
        this.getLevel(1);
        this.w = 75;
        this.h = 75;
    }

    init() {
        if(this.cases !== null) {
            for(let y = 0; y < this.cases.length; y++) {
                for(let x = 0; x < this.cases[y].length; x++) {
                    this.cases[y][x] = new Case(x,y,this.cases[y][x]);
                }
            }
            gameState = 'Playing';
        }
    }

    show() {
        if(this.cases !== null) {
            for(let y = 0; y < this.cases.length; y++) {
                for(let x = 0; x < this.cases[y].length; x++) {
                    this.cases[y][x].show();
                    this.cases[y][x].update();
                }
            }
        }
    }

    getCibleCoor(x,y) {
        return {
            x: Math.floor(x / this.w) >= 0 && Math.floor(x / this.w) < this.cases[0].length ? Math.floor(x / this.w) : false,
            y: Math.floor(y / this.h) >= 0 && Math.floor(y / this.h) < this.cases.length ? Math.floor(y / this.h) : false
        };
    }

    setValueCase(x,y,value, level) {
        if(this.cases !== null) {
            const cible = this.getCibleCoor(x,y);
            if(cible.x !== false && cible.y !== false) {
                console.log(this.cases[cible.y][cible.x].value);
                if( value===2 &&
                    typeof this.cases[cible.y][cible.x].value !== 'undefined') {
                        if(this.cases[cible.y][cible.x].value === 0) {
                            this.cases[cible.y][cible.x] =
                                new Tower(cible.x, cible.y, value, level);
                            return true;
                        } else if (this.cases[cible.y][cible.x].value === 2) {
                            if(this.cases[cible.y][cible.x].upgrade()===true) {
                                return true;
                            }
                        }
                }
            }
        }
        return false;
    }

    setHoverCase(x,y) {
        if(this.cases !== null) {
            const cible = this.getCibleCoor(x,y);
            this.setNoHoverCase();
            if(cible.x !== false && cible.y !== false) {
                if(typeof this.cases[cible.y][cible.x].hovered !== 'undefined') {
                    this.cases[cible.y][cible.x].setHover(true);
                }
            }
        }
    }

    setNoHoverCase() {
        for(let y = 0; y < this.cases.length; y++) {
            for(let x = 0; x < this.cases[y].length; x++) {
                this.cases[y][x].setHover(false);
            }
        }
    }

    getLevel(levelNumber) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.levelsFilesUrl, true);
        xhr.onload  = function(e) {
        	if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const data = JSON.parse(xhr.responseText);

                    if(typeof data[levelNumber.toString()] !== 'undefined') {
                        const levelSelected = data[levelNumber.toString()];
                        if(typeof levelSelected['cases'] !== 'undefined') {
                            mapObject.cases = levelSelected['cases'];
                            mapObject.init();
                            return true;
                        }
                    } else {
                        gameState = 'Ending';
                    }

                } catch(err) {
                    console.error(err.message + " in " + xhr.responseText);
                    return;
                }
            } else {
                console.error('error to loading file', xhr);
            }
        }
        xhr.send();

    }

    setNewLevelMap(levelNumber) {
        gameState = 'Loading';
        this.cases = null;
        try {
            this.getLevel(levelNumber);
        } catch (e) {
            if(e===false) {

            }
        } finally {
        }
    }

}
