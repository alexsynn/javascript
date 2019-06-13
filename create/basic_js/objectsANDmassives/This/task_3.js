"use strict"

var obj, method;

obj = {
    go: function() { console.log(this); }
};

console.log("1111111111111");
obj.go();            // (1) object

console.log("2222222222222");
(obj.go)();          // (2) object

console.log("3333333333333");
(method = obj.go)();      // (3) undefined

console.log("4444444444444");
(obj.go || obj.stop)(); // (4) undefined

console.log("5555555555555");
method = obj.go;
method();//??????????????????? why undefined?

console.log("6666666666666");
(obj.go() || obj.stop())();


//Вызовы (1) и (2) в примере ниже работают не так, как (3) и (4):
//В чём дело? Объясните логику работы this.