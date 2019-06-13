//function setClassName(obj, classes) {

  //  obj.className = classes;


//}

var obj = {
    className: 'open menu'
};
//var cls;

function addClass(obj, cls) {

    var classes = obj.className ? obj.className.split(' ') : [];

    if (classes.indexOf(cls) === -1) {
        classes.push(cls);
    }

    obj.className = classes.join(' ');

    return obj.className;

}


console.log(addClass(obj, 'new')); // obj.className='open menu new'
console.log(addClass(obj, 'open')); // без изменений (класс уже существует)
console.log(addClass(obj, 'open')); // без изменений (класс уже существует)
console.log(addClass(obj, 'open')); // без изменений (класс уже существует)
console.log(addClass(obj, 'open')); // без изменений (класс уже существует)
console.log(addClass(obj, 'me')); // obj.className='open menu new me'


//addClass(obj, cls);
//console.log(obj.className);