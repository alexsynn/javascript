function sortrevers(a, b) {

    return (b - a);

}

var arr = [5,0, 7, 0, 7, 2, 1, -10, 8];

arr.sort(sortrevers);

console.log(arr);

