/////////////////////////////////////////
//                                     //
//    TowerDefense ----------- 2019    //
//                                     //
/////////////////////////////////////////

// config
let map;
let cursor;
let particules = [];
let GameName = 'TowerDefense';


// init
function setup() {
    // creation d'un canvas à taille de la fenêtre
    createCanvas(1200, 600);

    cursorObject = new Cursor();

    mapObject = new Map();

    mapObject.init();

    lifeObject  = new Life('life',0,10);
    timerObject = new Timer(0,0);
}

function draw() {
    background(30, 30, 30);


    // titre
    textAlign(CENTER);
    fill(255);
    textSize(32);
    text(GameName, 0, 45);

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
