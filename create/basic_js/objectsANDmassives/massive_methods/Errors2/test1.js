function randomInteger(min, max) {
    var rand = min - 1 + Math.random() * (max - min + 1);
    rand = Math.ceil(rand);
    return rand;
}

for (var i = 0; i < 10; i++) {
    console.log(randomInteger(-0.25, 0.25));
}