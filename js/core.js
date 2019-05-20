/////////////////////////////////////////
//                                     //
//    TowerDefense ----------- 2019    //
//                                     //
/////////////////////////////////////////

// config
let cursor;
let GameName = 'TowerDefense';


// init
function setup() {
    // creation d'un canvas à taille de la fenêtre
    createCanvas(windowWidth, windowHeight);

    cursorObject = new Cursor();
}

function draw() {
    background(30, 30, 30);


    // titre
    textAlign(CENTER);
    fill(255);
    textSize(32);
    text(GameName, windowWidth/2, 45);


    // mis à jour curseur
    cursorObject.update();
    cursorObject.show();
}

// gestion du resize de la fenêtre
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
