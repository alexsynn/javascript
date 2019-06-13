function sum() {
    var length = arguments.length;
    var sumarguments = 0;
    if (length) {
        for (var i = 0; i < length; i++) {
            sumarguments += arguments[i];
        }

    } else {
        console.log('А где параметры?');
    }
    return sumarguments;
}

console.log(sum(2, 2, 2, 2));
console.log('/////////////////////////////////');
console.log(sum());