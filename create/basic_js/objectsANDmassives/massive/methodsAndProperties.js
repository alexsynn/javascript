
var obj = {
    className: 'open menu',
    showClassName: function () {
        console.log('className');
    }
};
console.log(obj);
console.log(obj.className);


var something = function () {
    console.log('I"m a method now ');
};

console.log(something);
console.log(something());


obj.className = something;


console.log(obj);

console.log(obj.className);

var someStrange = obj.className;

console.log(someStrange());


console.log(obj.className());



0xFF