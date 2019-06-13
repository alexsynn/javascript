//Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
//
// Например, если сейчас 23:00, то:
//
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {

    var currentdata = new Date();
    console.log('currentdata', currentdata);
    console.log('+currentdata', +currentdata);

    var tomorrow = new Date(currentdata.getFullYear(),currentdata.getMonth(),currentdata.getDate() + 1);

    console.log ('a', tomorrow - currentdata);
    return (tomorrow - currentdata)/1000;
    //return Math.round((tomorrow - currentdata)/1000);
}

console.log(getSecondsToTomorrow());