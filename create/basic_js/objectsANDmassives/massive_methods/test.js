//var datetest = new Date(2014, 0, 25, 0, 0, 0);

//console.log(datetest);


//var date = new Date(2011, 0, 1, 2, 3, 4, 567);
//console.log( date ); // 1.01.2011, 02:03:04.567

//console.log("///////////////////////////////////////////");
// текущая дата
//var date = new Date();

//console.log(date);

// час в текущей временной зоне
//console.log( date.getHours() );

// сколько сейчас времени в Лондоне?
// час в зоне GMT+0
//console.log( date.getUTCHours() );

//console.log("///////////////////////////////////////////");
//console.log( new Date().getTimezoneOffset());  //

//console.log("///////////////////////////////////////////");
//var today = new Date;

//today.setHours(0);
//console.log( today ); // сегодня, но час изменён на 0

//today.setHours(0, 0, 0, 0);
//console.log( today ); // сегодня, ровно 00:00:00.

//console.log("///////////////////////////////////////////");

//var start = new Date; // засекли время

// что-то сделать
//for (var i = 0; i < 100000; i++) {
//   var doSomething = i * i * i;
//}

//var end = new Date; // конец измерения

//console.log( "Цикл занял " + (end - start) + " ms" );

//console.log("///////////////////////////////////////////");

/*var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (var key in arr) arr[key]++;
}

function walkLength(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
    var date = new Date();
    //f(arr);
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
}

//console.log( 'Время walkIn: ' + bench(walkIn) + 'мс' );
//console.log( 'Время walkLength: ' + bench(walkLength) + 'мс' );

console.log("///////////////////////////////////////////");

// bench для каждого теста запустим много раз, чередуя
//var timeIn = 0,
  //  timeLength = 0;
//for (var i = 0; i < 100; i++) {
  //  timeIn += bench(walkIn);
    //timeLength += bench(walkLength);
//}

//console.log( 'Время walkIn: ' + timeIn + 'мс' );
//console.log( 'Время walkLength: ' + timeLength + 'мс' );

/*var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (var key in arr) arr[key]++;
}

function walkLength(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
    for (var i = 0; i < 10000; i++) f(arr);
}

console.time("All Benchmarks");

console.time("walkIn");
bench(walkIn);
console.timeEnd("walkIn");

console.time("walkLength");
bench(walkLength);
console.timeEnd("walkLength");

console.timeEnd("All Benchmarks");*/

//console.log("///////////////////////////////////////////");
//???????????????????????????????????????????????????????????????
//var date = new Date(2014, 11, 31, 12, 30, 0);

//var options = {
// era: 'long',
//  year: 'numeric',
//  month: 'long',
//  day: 'numeric',
//  weekday: 'long',
//  timezone: 'UTC',
//  hour: 'numeric',
//  minute: 'numeric',
//  second: 'numeric'
//};

//console.log( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
//console.log( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM

//console.log("///////////////////////////////////////////////////////////////////////");

//var width, height, contents;

//var title;

//function showWarning(width, height, title, contents) {
// if (width === undefined){
//width = 200};
// if (height === undefined) {
// height = 100};
// if (title === undefined) {
//title = "Предупреждение"};

//console.log(title);
//}

//showWarning(100, 200, "Hello", 6);