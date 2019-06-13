function removeClass(obj, cls) {

    var arr = obj.className.split(' ');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === cls) {
            arr.splice(i, 1);
           // i = 0;
            i--;
        }

    }
  obj.className = arr.join(' ');
    return obj;
}

var obj = {
    className: 'open menu my my menu menu blabla'
};

console.log(removeClass(obj, 'open'));// obj.className='menu'
console.log('obj = ', obj);

console.log(removeClass(obj, 'blabla'));// без изменений (нет такого класса)
console.log('obj = ', obj);

console.log(removeClass(obj, 'menu'));// 'my'

console.log('obj = ', obj);
// obj = {
//     className: 'my menu menu'
// };

console.log(removeClass(obj, 'menu'));// 'my'

//function removeClass(obj, cls) {
//   var classes = obj.className.split(' ');
//
//   for (var i = 0; i < classes.length; i++) {
//     if (classes[i] == cls) {
//       classes.splice(i, 1); // удалить класс
//       i--; // (*)
//     }
//   }
//   obj.className = classes.join(' ');
//
// }
//
// var obj = {
//   className: 'open menu menu'
// }
