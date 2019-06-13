var names = '126 + 34';

var operator = '+';
var arr = names.split(' ' + operator + ' ');

for (var i = 0; i < arr.length; i++) {
    console.log( 'Вам сообщение ' + arr[i] );
}

var sumResult = (+arr[0]) +operator (+arr[1]);

console.log(sumResult);