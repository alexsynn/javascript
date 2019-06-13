var f = function factorial(n) {
    return n ? n*factorial(n-1) : 1;
};

var g = f;  // скопировали ссылку на функцию-факториал в g
f = null;

console.log( g(5) ); // 120, работает!

/*function f(n) {
    return n ? n * f(n - 1) : 1;
}

var g = f;
f = null;

console.log( g(5) );

/*function makeCounter() {
    function counter() {
        return counter.currentCount++;
    }
    counter.currentCount = 1;

    return counter;
}

var counter = makeCounter();
console.log( counter() ); // 1
console.log( counter() ); // 2

function makeCounter() {
    var currentCount = 1;

    return function() { // (**)
        return currentCount++;
    };
}

var counter = makeCounter(); // (*)

// каждый вызов увеличивает счётчик и возвращает результат
//console.log( counter() ); // 1
//console.log( counter() ); // 2
//console.log( counter() ); // 3*/