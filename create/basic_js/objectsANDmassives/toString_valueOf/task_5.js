/*function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }

}

/var resultSum = sum(4);
console.log(sum(4)(10)(10));
Напишите функцию sum, которая будет работать так:

    sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15

*/
function sum(value) {
    var sumValue = value;

    function result(param) {

        sumValue += param;
        return result;

    }
    result.toString = function () {
        return sumValue;
    }
    return result;
}


console.log(sum(1)(2));
//sum().get();
