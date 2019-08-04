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
const GameName = 'TowerDefense';

let stop = false;
let gameState = 'Ending';



// init
function setup() {
    frameRate(60);
    createCanvas(1200, 600);

    initialGameEngine();
}

function draw() {

    background(30);

    // MAP display
    mapObject.show();
    timerObject.show();

    // Enemies display
    for(let enemy of enemies) {
        enemy.show();
    }

    // Particules display
    for(let particule of particules) {
        particule.show();
    }

    if(gameState === 'Loading') {

        fill(255);
        strokeWeight(2);
        stroke(30);
        textSize(32);
        textAlign(CENTER);
        text('LOADING...', width / 2, height / 2);

    } else if (gameState === 'Starting') {

    } else if (gameState === 'Playing') {
        // STATS
        waveObject.update();
        // Enemies Update
        for(let enemy of enemies) {
            enemy.update();
        }
        for(let p = 0; p < particules.length; p++) {
            particules[p].update();
            if(typeof particules[p] !== 'undefined') {
                if(
                    particules[p].isVisible() === true
                ) {
                    particules.splice(p,1);
                    p--;
                }
            }
        }

    } else if (gameState === 'Ending') {

        const waving = map(frameCount, 50, 140, QUARTER_PI, PI);
        fill(255);
        strokeWeight(2);
        stroke(30);
        textSize(sin(waving)*6+32);
        textAlign(CENTER);
        text('GAMEOVER', width / 2, height / 2);

    }


    if(stop===true) {
        background(0,150);
        fill(255);
        strokeWeight(2);
        stroke(30);
        textSize(32);
        textAlign(CENTER);
        text('PAUSE', width / 2, height / 2);
    }

    // mis à jour curseur
    cursorObject.update();
}

function initialGameEngine() {

    document.querySelector('#stats > ul').innerHTML = '';
    particules = [];
    enemies = [];

    cursorObject = new Cursor();

    mapObject = new Mapping();

    mapObject.init();

    stageObject = new Stage('Stage',1,0);
    stageObject.init();

    waveObject = new Wave('Wave',1,3);
    waveObject.init();

    lifeObject = new Life('life',0,10);
    lifeObject.init();

    coinObject = new Coin('Coin',25,0);
    coinObject.init();


    timerObject = new Timer(0,0);

    loop();
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

function mouseDragged() {
    cursorObject.dragged();
}
