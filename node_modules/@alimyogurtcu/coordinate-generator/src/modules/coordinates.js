// -180 & +180
export const generateRandomLong = () => {
    var num = parseFloat((Math.random() * 180).toFixed(3));
    var positiveOrNegative = Math.random();
    if (positiveOrNegative >= .5) {
        num = num * -1;
    }
    return num;
}

// -90 & +90
export const generateRandomLat = () => {
    var num = parseFloat((Math.random() * 90).toFixed(3));
    var positiveOrNegative = Math.random();
    if (positiveOrNegative >= .5) {
        num = num * -1;
    }
    return num;
}