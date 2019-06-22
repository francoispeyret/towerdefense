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

    lifeObject = new Life('life',0,10);
    lifeObject.init();

    waveObject = new Wave('Wave',1,99);
    waveObject.init();

    coinObject = new Coin('Coin',25,0);
    coinObject.init();


    timerObject = new Timer(0,0);
}

function draw() {
    // STATS
    waveObject.upadte();

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
    for(let e = 0; e < enemies.length; e++) {
        enemies[e].update();
        enemies[e].show();
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
