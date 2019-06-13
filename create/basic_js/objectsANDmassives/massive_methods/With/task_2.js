//Что выведет этот код?

var a = 1;

var obj = {
    b: 2
};

with(obj) {
    var b;
    console.log( a + b );
}

//3