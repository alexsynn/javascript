function eratosfen(n) {

    var Arr = [];
    var i;
    var p = 2;

    for (i = 2; i <= n; i++) {
        Arr[i] = true;
    }

    while (p * p < n) {

        for (i = 2 * p; i < n; i = i + p) {
            Arr[i] = false;
        }

        for (i = p + 1; i < n; i++) {
            if (Arr[i]) {
               break;
            }
        }
        p = i;
    }

    var sum = 0;
    for (i = 0; i < Arr.length; i++) {
        if (Arr[i]) {
            console.log(i);
            sum += i;
        }
    }

    console.log(JSON.stringify(Arr));
    return sum;
}

// console.log(eratosfen(1));
// console.log(eratosfen(2));
// console.log(eratosfen(3));
// console.log(eratosfen(4));
console.log(eratosfen(3));