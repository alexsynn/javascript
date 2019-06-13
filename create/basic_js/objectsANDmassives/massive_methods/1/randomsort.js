function sortrandom(arr) {

    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var rand = Math.random() * arr.length;
        rand = Math.floor(rand);

        var a = arr.splice(rand, 1);
        result.push(a[0]);

        i = 0;
    }
    return result;

}
var arr = [1, 2, 3, 4, 5,6,7,8,9,0];

console.log(sortrandom(arr));


//????????????????????????????????????????????
//Обычно Math.random() возвращает результат от 0 до 1. Вычтем 0.5, чтобы область значений стала [-0.5 ... 0.5).
//var arr = [1, 2, 3, 4, 5];
//
// function compareRandom(a, b) {
//   return Math.random() - 0.5;
// }
//
// arr.sort(compareRandom);
//
// alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]