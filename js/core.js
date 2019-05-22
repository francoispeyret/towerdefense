/////////////////////////////////////////
//                                     //
//    TowerDefense ----------- 2019    //
//                                     //
/////////////////////////////////////////

// config
let map;
let cursor;
let GameName = 'TowerDefense';


// init
function setup() {
    // creation d'un canvas à taille de la fenêtre
    createCanvas(1200, 600);

    cursorObject = new Cursor();

    mapObject = new Map();

    mapObject.init();

    lifeObject = new Life('life',0,10);
    console.log(lifeObject);
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


    // mis à jour curseur
    cursorObject.update();
    cursorObject.show();
}

function mousePressed() {
    cursorObject.clicked();
}

function mouseReleased() {
    cursorObject.released();
}

function mouseMoved() {
    cursorObject.moved();
}
