var n;
function f1(x) { ////вариант 1

    var zzz = arguments[3];
    if (arguments[3]) {

        var result = 1;
    } else {
        result = 0;
    }
    console.log("z = ", zzz);
    return result;
}

// console.log(f1(7));
console.log(f1(1,2,3,"x"));
// console.log(f1());

//*************************************

function f2(x) { ////вариант 2

    if (arguments[0]) {

        if (x === undefined) {
            var result = 1;
        } else result = 1;
    } else {
        result = 0;
    }
    return result;
}

//console.log(f2(7));
//console.log(f2(n));


//console.log(f(7));

//console.log(f(n));

//function f1(x) {
//     arguments[0] = 5; // меняет переменную x
//     console.log( x ); // 5
// }
//
// function f(x) {
//     "use strict";
//     x = 5;
//     console.log( arguments[0] ); // 5, обновленный x
// }
//
// f1(1);
// f(1);
//************************************************
//var obj = {
// value: 1,
// number: 2
// };
//
// var obj1 = {
//     check: 100,
//     number: 200
// };
//
//
// function copy() {
//     var dst = arguments[0];
//
//     for (var i = 1; i < arguments.length; i++) {
//         var arg = arguments[i];
//         for (var key in arg) {
//             dst[key] = arg[key];
//         }
//     }
//
//     return dst;
// }
//
// console.log(copy(obj, obj1));
//**************************************