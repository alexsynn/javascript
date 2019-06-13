var i = 2;
var j = 2;
console.log('Простое число ' + i);

for (i; i < 10; i++) {

    for (j=2; i > j; j++) {

        if (i % j == 0) {

            //  non simple detected
            continue;
        }

        else if (i % j !== 0) {
            console.log('Простое число ' + i);
        }
    }



}

/*

 */