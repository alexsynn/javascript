
function setClassName(obj, classes) {

    obj.className = classes;


}
var obj = {
    className: 'open menu'
}

var cls = 'new';
//var cls = "new";
//  console.log(obj);
//console.log(cls);
// setClassName(obj, cls);



// var newObj = {

// className: "new"

// }



function addClass(obj, cls) {

    var classes = obj.className? obj.className.split(' '): [];

    if (classes.indexOf(cls) === -1) {
        classes.push(cls);
    }

    obj.className = classes.join(' ');


}
addClass(obj, cls);
console.log(obj.className);