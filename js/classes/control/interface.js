
document.getElementById('stop').onclick = function() {
    if(gameState !== 'Loading') {
        stop = !stop;
        if(stop===true) {
            noLoop();
        } else {
            loop();
        }
    }
}
document.getElementById('play').onclick = function() {
    stop=false;
    initialGameEngine();
}
