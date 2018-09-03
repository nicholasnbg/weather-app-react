const convertWind = angle => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
    const finishAngles = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5, 361];
    let textDir = '';
    let i = 0;
    while (angle > finishAngles[i]) {
        i++;
    }
    textDir = directions[i];
    return textDir;
}

const convertToPercent = dec => {
    return Math.round(dec * 100)
}

const convertMphToKph = mph => {
    return Math.round(mph * 1.61);
}

const fToCelcius = f => {
    return Math.round((f - 32) * 5 / 9);
}

module.exports = {
    convertWind,
    convertToPercent,
    fToCelcius,
    convertMphToKph
}