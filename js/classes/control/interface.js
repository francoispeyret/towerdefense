
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


let buyButtons = document.getElementsByClassName('buy');

for(let i=0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click",function() {
        removeActiveBuying();
        activeBuying(buyButtons[i]);

        const towerLevel = parseInt(this.getAttributeNode('towerlevel').value);
        cursorObject.placeTower(towerLevel);
    });
}


function activeBuying(node) {
    if(typeof node !== 'undefined')
        node.classList.add('active');
}

function removeActiveBuying() {
    for(let i=0; i < buyButtons.length; i++) {
        buyButtons[i].classList.remove('active');
    }
}
