var arr = ["Есть", "жизнь", "на", "Марсе"];

var result = arr.map(function (stringlenth) {

    return stringlenth.length;

});

console.log(result.join('; ') + ';');
//Код ниже получает из массива строк новый массив, содержащий их длины:

// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }
//
// alert( arrLength ); // 4,5,2,5

