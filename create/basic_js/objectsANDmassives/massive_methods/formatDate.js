//Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:
//
// Например:
//
// var d = new Date(2014, 0, 30); // 30 января 2014
// alert( formatDate(d) ); // '30.01.14'
// P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.


function formatDate(date) {

    var dateOut = date.getDate();
    var monthOut = date.getMonth() + 1;
    // var yearOut = date.getFullYear() % 100;//.slice(2);
    var yearOut = ("" + date.getFullYear()).slice(2);



    if (date.getDate() < 10) {
        dateOut = "0" + dateOut;
    }

    if (date.getMonth() < 10) {
        monthOut = "0" + monthOut;
    }

    if (yearOut < 10) {
        yearOut = "0" + yearOut;
    }
    return (dateOut + "." + monthOut + "." + yearOut);
}

var d = new Date(2014, 0, 30); // 30 января 2014

console.log(formatDate(d)); // '30.01.14'