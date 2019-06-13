function randomMinMax(min, max) {

    var a = Math.random() * (max - min + 1) + min;

    if (Math.round(a) > max) {
        counterInstance = Math.floor(max);
    } else if (Math.round(a) < min) {
        counterInstance = Math.ceil(min);
    } else if (a => min && a <= max) {
        counterInstance = Math.round(a);
    }
    return counterInstance;
}

for (var i = 0; i < 10; i++) {
   // console.log(randomMinMax(195, 200));
   //  console.log(randomMinMax(-1.99, 1.99)); // -1, -0, 0, 1
   //  console.log(randomMinMax(-0.99, 0.99)); // -0, -0, 0
    console.log(randomMinMax(-3.5, 5.99)); // -3, -2, -1, -0, 0, 1, 2, 3, 4, 5
}


