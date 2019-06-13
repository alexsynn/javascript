function copyandsorted(arr) {
    var arrSorted = [];

    for (var i = 0; i < arr.length; i++) {
        arrSorted[i] = arr[i];
    }

    return arrSorted.sort();
}

var arr = ["HTML", "JavaScript", "CSS"];

console.log(copyandsorted(arr));

console.log(arr);

//var arr = ["HTML", "JavaScript", "CSS"];
//
// // ... ваш код ...
//
// alert( arrSorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)
//var arr = ["HTML", "JavaScript", "CSS"];
//
// var arrSorted = arr.slice().sort();
//
// alert( arrSorted );
// alert( arr );