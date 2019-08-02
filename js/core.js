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

let stop = false;
let gameState = 'Ending';



// init
function setup() {
    frameRate(60);
    // creation d'un canvas à taille de la fenêtre
    createCanvas(1200, 600);

    initialGameEngine();
}

function draw() {

    background(30);

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
