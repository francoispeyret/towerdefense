/////////////////////////////////////////
//                                     //
//    TowerDefense ----------- 2019    //
//                                     //
/////////////////////////////////////////


function setup() {
    // creation d'un canvas à taille de la fenêtre
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(30, 30, 30);


    // titre
    textAlign(CENTER);
    fill(255);
    textSize(32);
    text('TowerDefense', windowWidth/2, 45);

    // mouse cursor
    ellipse(mouseX, mouseY, 12, 12);
}

// gestion du resize de la fenêtre
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
