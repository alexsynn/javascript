//Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
//
// Например, для 2 января 2015:
//

function getDateAgo(date, days) {

    var result = new Date(date);

    result.setDate(result.getDate() - days);

    return result;

}

var date = new Date(2015, 0, 2);

console.log('now' , date);
console.log('now locale' , date.toLocaleString());
//
console.log(getDateAgo(date, 1)); // 1, (1 января 2015)
console.log(getDateAgo(date, 2)); // 31, (31 декабря 2014)
console.log(getDateAgo(date, 365)); // 2, (2 января 2014)
//
// console.log('after' , date);
//
//
//
