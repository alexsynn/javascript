//Каков будет результат выполнения этого кода?

var value = 0;


/*
function f() {
    var value;
    if (1) {
        value = true;
    } else {
        value = false;
    }

    console.log( value );
}
*/

function f() {
    if (1) {
        value = true;
    } else {
        var value = false;
    }

    console.log( value );
}

f();

//1: Printed: "true"
//2: value changed
// WHY VALUE WAS NOT CHANGED?




var value = 0;

function f() {
    if (1) {
        value = true;
    } else {
        value = false;
    }

    console.log( value );
}

f();


//1: Printed: "true"
//2: value???  value changed

