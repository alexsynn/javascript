var currentCount = 1;

function makeCounter() {
    return function() {
        return currentCount++;
    };
}

var counter = makeCounter();
var counter2 = makeCounter();


console.log( 'currentCount ', currentCount ); //0  1

console.log( counter() );//1     1
console.log( counter() );//2     2

console.log( counter2() );//3    3
console.log( counter2() );//4    4

console.log( 'currentCount ', currentCount );//5


console.log( counter() );//6   5
console.log( 'currentCount ', currentCount );//7    6

// 0: 1
// 1: 1
// 2: 2
// 3: 3
// 4: 4
// 5: 5
// 6: 6
// 7: 7
'[[Scope]]'