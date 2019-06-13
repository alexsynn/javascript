
var superArray = ["Яблоко", "Апельсин", "Груша"];
superArray.forEach(function(item, i, originArr) {

    arr[i] = '=' + originArr[i] + '=';

    originArr[i] = '_' + originArr[i] + '_';
    console.log( i + ": " + item + " (массив:" + originArr + ")" );
});
