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
let particules = [];
let GameName = 'TowerDefense';


// init
function setup() {
    // creation d'un canvas à taille de la fenêtre
    createCanvas(1200, 600);

    cursorObject = new Cursor();

    mapObject = new Mapping();

    mapObject.init();



    lifeObject  = new Life('life',0,10);
    timerObject = new Timer(0,0);
    enemyObject = new Enemy(10);
}

function draw() {
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
    enemyObject.update();
    enemyObject.show();
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
