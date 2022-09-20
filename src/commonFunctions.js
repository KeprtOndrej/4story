/**
 *
 * @param {int} time
 * @returns {string}
 */
function timePadding(time) {
    if(time < 10){
        return `0${time}`
    }
    return time.toString();
}

/**
 *
 * @param {int} time number of ms from Epoch start
 * @return {string} time in format HH:mm:ss
 */
export function timeNumToString(time){
    const date = new Date(time);
    return `${timePadding(date.getHours())}:${timePadding(date.getMinutes())}:${timePadding(date.getSeconds())}`
}

// export function miliSecondsToMinutes(miliseconds){
//     return Math.floor(miliseconds / (60 * 1000));
// }

export function minutesToMiliseconds(minutes){
    return minutes * 60 * 1000;
}