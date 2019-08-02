/////////////////////////////////////////
//                                     //
//    TowerDefense ----------- 2019    //
//                                     //
/////////////////////////////////////////

// config
let mapObject;
let cursorObject;
let lifeObject;
let timerObject;
let waveObject;
let particules = [];
let enemies = [];
let GameName = 'TowerDefense';

let SpeedDsitance = 1.55;


// init
function setup() {
    frameRate(60);
    // creation d'un canvas à taille de la fenêtre
    createCanvas(1200, 600);

    cursorObject = new Cursor();

    mapObject = new Mapping();

    mapObject.init();

    stageObject = new Stage('Stage',1,0);
    stageObject.init();

    waveObject = new Wave('Wave',1,2);
    waveObject.init();

    lifeObject = new Life('life',0,10);
    lifeObject.init();

    coinObject = new Coin('Coin',25,0);
    coinObject.init();


    timerObject = new Timer(0,0);
}

function draw() {
    // STATS
    waveObject.update();

    background(30, 30, 30);

    // MAP
    mapObject.show();

    // Particules
    for(let p = 0; p < particules.length; p++) {
        particules[p].show();
        particules[p].update();
        if(
            particules[p].getPosition().x + particules[p].w < 0 ||
            particules[p].getPosition().x - particules[p].w > width ||
            particules[p].getPosition().y + particules[p].w < 0 ||
            particules[p].getPosition().y - particules[p].w > height
        ) {
            particules.splice(p,1);
            p--;
        }
    }

    // mis à jour curseur
    cursorObject.update();
    cursorObject.show();
    timerObject.show();

    // enemies
    for(let enemy of enemies) {
        enemy.update();
        if(typeof enemy !== 'undefined')
            enemy.show();
    }
}

function mousePressed() {
    cursorObject.pressed();
    //particules.push(new Particule(cursorObject.x,cursorObject.y,p5.Vector.random2D(),'test'));
}

function mouseReleased() {
    cursorObject.released();
}

function mouseMoved() {
    cursorObject.moved();
}
