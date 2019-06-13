function filterRangeInPlace(arr, a, b) {
    //var newmassive = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] < a) || (arr[i] > b)) {
            arr.splice(i, 1);
            i = 0;// i--;
        }
    }
}

arr = [8, 3, 5, 1, , , , , 1000, 2];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // массив изменился: остались [3, 1]