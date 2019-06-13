//Возможны ли такие функции A и B в примере ниже, что соответствующие объекты a,b равны (см. код ниже)?

var obj = {};
    function A() {
        return obj;
    }
    function B() {
        return obj;
    }

var a = new A;
var b = new B;

console.log( a == b ); // true
//Если да – приведите пример кода с такими функциями.