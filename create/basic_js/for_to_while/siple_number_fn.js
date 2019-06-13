var i = 2;
var j = 2;
console.log('Простое число ' + i);

function is_simple(checked_number) {

    for (j = 2; checked_number > j; j++) {

        if (checked_number % j == 0) {

            //  non simple detected
            continue;
        }

        else if (checked_number % j !== 0) {
            console.log('Простое число ' + checked_number);
        }
    }

    return false;
}

for (i; i < 10; i++) {
    if (is_simple(i)) {
        console.log('Простое число ' + i);
    }
}

/*

 */