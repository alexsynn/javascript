//Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
//
// Параметры:
//
// year – 4-значный год, например 2012.
// month – месяц от 0 до 11.
// Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {

    data = new Date();
    data.setFullYear(year);
    data.setMonth(month + 1 );
    data.setDate(0);

    return data;
}

console.log(getLastDayOfMonth(2019, 0));//29
console.log(getLastDayOfMonth(2019, 0)); // 31
console.log( getLastDayOfMonth(2019, 1) ); // 29
console.log( getLastDayOfMonth(2019, 1) ); // 28


//Создадим дату из следующего месяца, но день не первый, а «нулевой» (т.е. предыдущий):
//
//  function getLastDayOfMonth(year, month) {
//   var date = new Date(year, month + 1, 0);
//   return date.getDate();
// }
