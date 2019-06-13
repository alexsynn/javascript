function randomMinMax(min, max) {

    var result = Math.random() * (max - min + 1) + min;

    if (Math.ceil(result) > max) {
        result = Math.floor(result);
    } else if (Math.floor(result) < min) {
        result = Math.ceil(result);
    }

    result = Math.floor(result);
    return result;
}

for (var i = 0; i < 10; i++) {
    console.log(randomMinMax(-0.99, 0.99));
}


