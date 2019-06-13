function makeCounter() {
    var currentCount = 15;

    var obj = {
        getValue: function () {
            return currentCount;
        },
        inc: function () {
            currentCount++;
            return this;
        },
        dec: function () {
            currentCount--;
            return this;
        },
        set: function (a) {
            currentCount = a;
            return this;
        },

        log: function () {
            console.log(currentCount);
            return this;
        }

    };
    return obj;

}

makeCounter().log()
    .inc()
    .log()
    .dec()
    .dec()
    .dec()
    .dec()
    .dec()
    .dec()
    .log()
    .set(63)
    .inc()
    .log()
;
