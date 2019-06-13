//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть, дефисы удаляются, а все слова после них получают заглавную букву.

// сделать через arr.split();

function camelize(str) {

   if (str[0] === "-") {
       str = str.substring(1);
   }
    var Arr = str.split('-');

    for (var i = 0; i < Arr.length; i++) {
        var stroka = Arr[i];
        Arr[i] = stroka[0].toUpperCase() + stroka.slice(1);

    }
var result = Arr.join('');
return result;
}


    // var Arr = str.split('-');
    //
    //     Arr.forEach(function (item) {
    //     var Arr1 = [];
    //         var counterInstance =  item.charAt(0).toUpperCase();
    //     Arr1.push(counterInstance);
    //         return Arr1;
    //     });
    //
    //     return Arr1.join('');



console.log(camelize("backg-round-color")); //== 'backgroundColor';
console.log(camelize("list-style-image")); //== 'listStyleImage';
console.log(camelize("")); //== '';
console.log(camelize("---")); //== '';
console.log(camelize("-A--")); //== 'A';
console.log(camelize("-Aaaa--")); //== 'Aaaa';
console.log(camelize("-b--")); //== 'B';
console.log(camelize("-baaa--")); //== 'Baaa';
console.log(camelize("-webkit-transition")); //== 'WebkitTransition';
console.log(camelize("-webkit---transition")); //== 'WebkitTransition';
console.log(camelize("-webkit---transition")); //== 'WebkitTransition';


