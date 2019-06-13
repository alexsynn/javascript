// 3 different ways to copy
var arr = [1, 2, "zzz"];
arr[10]= "x";
//  first way
var arrCopy = [];

for (var i = 0; i < arr.length; i++) {

    arrCopy[i] = arr[i];
}

console.log(arr);
console.log(arrCopy);
// second way

var arrCopy1;// ?????????????? не нужно объявлять эту переменную как массив?
// если массив скопирован в эту переменную, то автоматически она становится типом массив и в дальнейшем
// с ней нужно работать как с массивом?
arrCopy1 = arr.slice();

console.log(arrCopy1);
console.log(arr);


//third way

var ArrCopy2 = [];

for (var i = 0; i < arr.length; i++) {

    ArrCopy2.push(arr[i]);
}
console.log("ArrCopy2");
console.log(ArrCopy2);
console.log(arr);

console.log(" end ArrCopy2");

// 1 way to copy
var obj = {
    a: 4,
    myStr: "some string"
};

//

var objCopy = {};

for (var key in obj) {

    objCopy[key] = obj[key];
}
console.log(obj);
console.log(objCopy);
