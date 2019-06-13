var arr = [1, 2, 3, 4, 5];

function getSum(arr) {
    var arrCopy = [];
    // arr.reduce(function (acc, item) {
    arr.reduce(function (acc, item, index, originArr) {
        acc = acc + item;
        arrCopy.push(acc);
        // var prevItem = originArr[index - 1];
        return acc;
    }, 0);
    return arrCopy;
}

console.log(getSum2(arr));




//f(0, 0)

// f(0, 1) === 1, arrCopy = [1]
// f(1,2 ) === 3 , arrCopy = [1, 3]
// f(3,3 ) === 6, arrCopy = [1, 3, 6]
// f(6,4 ) ===10 , arrCopy = [1, 3, 6, 10]
// f(10, 5 ) === 15, arrCopy = [1, 3, 6, 10, 15]
// f(, ) , arrCopy = []
// f(, ) , arrCopy = []
// f(, ) , arrCopy = []
// f(, ) , arrCopy = []