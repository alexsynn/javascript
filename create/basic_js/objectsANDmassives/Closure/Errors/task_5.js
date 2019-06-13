function makeCounter() {
    var currentCount = 1;

    return function () {
        var innerCurrentCount;
        // console.log(currentCount);
        // можно ли здесь вывести currentCount из внешней функции (равный 1)?
        return currentCount;
    };
}

var result = makeCounter();
console.log(result());
console.log(makeCounter()());
//  Здесь должен быть ответ
// No, но если убрать строку № 5, то можно