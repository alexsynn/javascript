function unique(arr) {

    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i];
    }

    var result = [];

    for (var key in obj) {
        result.push(obj[key]);
    }

    return result;
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

console.log(unique(strings)); // кришна, харе, 8-()