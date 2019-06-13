var names = '126 + 34';

var arr = names.split(' + ');

for (var i = 0; i < arr.length; i++) {
    console.log( 'Вам сообщение ' + arr[i] );
}

var sumResult = (+arr[0]) + (+arr[1]);

console.log(sumResult);