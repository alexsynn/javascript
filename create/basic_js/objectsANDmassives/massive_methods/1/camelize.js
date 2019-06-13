//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть, дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {

    var strLength = str.length;

    var newStr = [];
    for (var i = 0; i < strLength; i++) {
        if (str[i] !== '-') {
            newStr.push(str[i]);
        } else {
            newStr.push(str[i + 1].toUpperCase());
            i = i + 1;
        }
    }
return (newStr.join(''));
}

console.log(camelize("backg---round-color")); //== 'backgroundColor';
console.log(camelize("list-style-image")); //== 'listStyleImage';
console.log(camelize("-webkit-transition")); //== 'WebkitTransition';


//готовое решение
/*
const camelize = str => {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        // преобразовать: первый символ с большой буквы
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
};*/