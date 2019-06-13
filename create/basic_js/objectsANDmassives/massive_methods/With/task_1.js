//Какая из функций будет вызвана?

function f() {
    console.log(1)
}

var obj = {
    f: function() {
        console.log(2)
    }
};

with(obj) {
    f();
}

// second