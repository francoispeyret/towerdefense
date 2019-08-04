
function getPrice(level) {
    if(typeof level === 'undefined' || level === null) {
        return null;
    } else if(level === 1) {
        return 25;
    } else if(level === 2) {
        return 50;
    } else if(level === 3) {
        return 100;
    }
}
