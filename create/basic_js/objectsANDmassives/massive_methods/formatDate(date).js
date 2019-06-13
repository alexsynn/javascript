//Напишите функцию formatDate(date), которая форматирует дату date так:
//
// Если со времени date прошло менее секунды, то возвращает "только что".
// Иначе если со времени date прошло менее минуты, то "n сек. назад".
// Иначе если прошло меньше часа, то "m мин. назад".
// Иначе полная дата в формате "дд.мм.гг чч:мм".

function format(date) {

    var dateOut = date.getDate();
    var monthOut = date.getMonth() + 1;
    var yearOut = date.getFullYear() % 100;//.slice(2);


    if (date.getDate() < 10) {
        dateOut = "0" + dateOut;
    }

    if (date.getMonth() < 10) {
        monthOut = "0" + monthOut;
    }

    if (yearOut < 10) {
        yearOut = "0" + yearOut;
    }
    return (dateOut + "." + monthOut + "." + yearOut + " " + date.getHours() + ":" + date.getSeconds());
}

///////////
function formatDate(date) {

    if ((new Date() - date) / 1000 < 1) {
        return 'Только что';

    } else if ((new Date() - date) / (60 * 1000) < 1) {
        return (new Date() - date) / 1000 + " секунд назад";

    } else if ((new Date() - date) / (60 * 60 * 1000) < 1) {
        return (new Date() - date) / (60 * 1000) + " минут назад";

    } else {
        return format(date);
    }
}

console.log(formatDate(new Date(new Date - 1))); // "только что"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата в формате "дд.мм.гг чч:мм"