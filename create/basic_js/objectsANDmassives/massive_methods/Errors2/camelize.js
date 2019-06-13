function camelizecheck(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "-") {
            count++;
        }
    }
    if (count === str.length) {
        str = "";
    }

    var StringResult = "";
    if (str) {
        for (i = 0; i < str.length; i++) {
            if (str[i] === "-") {
                continue;
            } else {
                if (str[i - 1] === "-") {
                    StringResult = StringResult + "-";
                    StringResult += str[i];
                } else {
                    StringResult += str[i];
                }
            }
        }
    }
    return StringResult;
}

var str = "-------------baaa---x1234565-------hhhhhhhhhhhhh------";
// var str = "";
// var str = "-";
// var str = "--";
// var str = "---";
//
// var str = "-------------b";
// var str = "h------";
// var str = "-------------baaa----------hh--a-b-c-d-e---f-----hhhhh------";


var param = camelizecheck(str);

function camelize(param) {

    if (param) {
        var Arr = param.split('-');
        for (var i = 1; i < Arr.length; i++) {

            Arr[i] = Arr[i].charAt(0).toUpperCase() + Arr[i].slice(1);
        }

        return Arr.join('');

    } else {
        return "Это пустая строка";
    }
}

console.log(camelize(param));




