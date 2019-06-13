//Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
//
// День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
//
// var date = new Date(2012, 0, 3);  // 3 янв 2012
// alert( getLocalDay(date) );       // вторник, выведет 2

function getLocalDay(date) {
    return [7, 1, 2, 3, 4, 5, 6][date.getDay()];
    // return [7, 1, 2, 3, 4, 5, 6].test;

    // var propertyName = 'test';
    // return [7, 1, 2, 3, 4, 5, 6][propertyName];

}


////
function getLocalDay1(date) {

    var day = date.getDay();

    if (day === 0) { // день 0 становится 7
        day = 7;
    }

    return day;
}

var date = new Date(2012, 0, 3);  // 3 янв 2012
console.log(getLocalDay(date));       // вторник, выведет 2

var date1 = new Date(2014, 0, 3); // 3 января 2014
var date3 = new Date(2019, 0, 31); // 31 января 2019
console.log(getLocalDay(date1)); // 'пт'  5
console.log(getLocalDay(date3)); // 'пт'  5

console.log('////////////////////////////////////////////////');
console.log(getLocalDay1(date));
console.log(getLocalDay1(date1));
console.log(getLocalDay1(date3));