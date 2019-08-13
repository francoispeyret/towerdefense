
function getPrice(level) {
    if(typeof level === 'undefined' || level === null) {
        return null;
    } else if(level === 1) {
        return 250;
    } else if(level === 2) {
        return 500;
    } else if(level === 3) {
        return 1000;
    }
}
