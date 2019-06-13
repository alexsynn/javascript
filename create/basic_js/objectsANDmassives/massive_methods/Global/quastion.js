// var f = function (...) { /* тело функции */
// };
//
// //Именованное с именем sayHi:
// var f = function sayHi(...) { /* тело функции */
// };
//

var a = 1;

function getFunc() {
    var a = 2;

    var func = new Function('', 'console.log(\'1\'); return function() {};');

    return func;
}

getFunc(a)()()()(); // 1, из window   ПОЧЕМУ 4 СКОБКИ?

// var fResult;
// fResult = getFunc();
// fResult();
//