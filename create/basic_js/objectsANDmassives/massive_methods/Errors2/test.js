var str = "background-color";

var strArr = str.split("");
console.log(count);
console.log(counter);

    var count = strArr.reduce(function (counter, item, index) {
        if (index < 5) {
            return counter;
        }
        // console.log(item, counter);
        if (item === "-") {
            counter++;
        }
        return counter;
    }, 0);



console.log(count);
//console.log(camelize("background-color")); // backgroundColor
//console.log(camelize("list-style-image")); // listStyleImage
//console.log(camelize("-webkit-transition")); // WebkitTransition