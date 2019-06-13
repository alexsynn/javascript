function getSecondsToday() {

    var currentData = new Date();
    var startOfDay = new Date(currentData.getFullYear(),
        currentData.getMonth(),
        currentData.getDate(),
        0,
        0,
        0);

    return Math.round((currentData - startOfDay)/1000);
}

console.log('getSecondsToday()');
console.log(getSecondsToday());
console.log(getSecondsToday());
console.log(getSecondsToday());
console.log(getSecondsToday());
console.log(getSecondsToday());


////////////////////////////готовое решение

function getSecondsToday1() {

    var datetoday = new Date();

    return datetoday.getHours()*3600 + datetoday.getMinutes()*60 + datetoday.getSeconds();

   }

console.log('getSecondsToday1()');
console.log(getSecondsToday1());
console.log(getSecondsToday1());
console.log(getSecondsToday1());
console.log(getSecondsToday1());
console.log(getSecondsToday1());
