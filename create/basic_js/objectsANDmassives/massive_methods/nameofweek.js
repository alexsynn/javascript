//Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
//
// Например:
//
// var date = new Date(2012,0,3);  // 3 января 2012
// alert( getWeekDay(date) );      // Должно вывести 'вт'

//вариант 1

function getWeekDay(date) {

    var dayOfWeek = date.getDay();////????????????????????????

    switch (dayOfWeek) {
        case 0:
            console.log('вс');
            break;
        case 1:
            console.log('пн');
            break;
        case 2:
            console.log('вт');
            break;
        case 3:
            console.log('ср');
            break;
        case 4:
            console.log('чт');
            break;
        case 5:
            console.log('пт');
            break;
        case 6:
            console.log('сб');
            break;
    }
}


var date = new Date(2012, 0, 3);  // 3 января 2012
getWeekDay(date);      // Должно вывести 'вт'


/////// 2 вариант
function getWeekDay2(date) {
    var dayOfWeek = date.getDay();
    var obj = {
        0: 'вс',
        1: 'пн',
        2: 'вт',
        3: 'ср',
        4: 'чт',
        5: 'пт',
        6: 'сб'
    };
    var Arr = [];
    for (var key in obj) {
        Arr[key] = obj[key];
    }
    key = 0;
    while (key !== dayOfWeek) {
        key++;
    }
    console.log(obj[key]);
}
getWeekDay2(date);


//////Готовое решение
var date = new Date(2014, 0, 3); // 3 января 2014
console.log( getWeekDay3(date) ); // 'пт'

function getWeekDay3(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}
