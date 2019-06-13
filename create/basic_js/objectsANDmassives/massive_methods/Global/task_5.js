function makeCounter() {
    var currentCount = 1;

    return function() {
        var currentCount;
        // можно ли здесь вывести currentCount из внешней функции (равный 1)?
    };
}

//  Здесь должен быть ответ