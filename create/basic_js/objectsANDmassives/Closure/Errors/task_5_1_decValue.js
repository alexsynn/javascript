function makeCounter() {
    var currentCount = 0;

    return {
        getValue: function () {
            return currentCount;
        },
        inc: function (incValue) {
            if (incValue === undefined) {
                currentCount++;
            }
            else {
                currentCount += incValue;
            }
            return this;
        },
        dec: function (decValue) {
            if (decValue === undefined) {
                currentCount--;
            } else {
                currentCount -= decValue;
            }
            return this;
        },
        set: function (setValue) {
            currentCount = setValue;
            return this;
        },

        log: function () {
            console.log(currentCount);
            return this;
        }

    };
}

makeCounter().log()
    .inc(100)
    .log()
    .dec(6)
    .log()
    .set(63)
    .inc()
    .log()
;
