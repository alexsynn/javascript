var i = 2;
var jj = 2;
var a;
console.log('Простое число ' + i);

for (i; i < 100; i++) {
    a = 2;
    for (jj = 2; i > jj; jj++) {
        if (i > jj) {
            if (i % jj != 0) {
                a = a + 1;
            }
            else if (i % jj == 0) {
                continue;
            }
            if (a == i) {
                console.log('Простое число ' + i);
            }
        }

        else {
            console.log('Некорректные данные');
        }

    }
}


/*

 */