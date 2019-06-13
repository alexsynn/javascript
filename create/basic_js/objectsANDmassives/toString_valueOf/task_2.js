//Объявлен объект с toString и valueOf.

  //  Какими будут результаты alert?

var foo = {
    toString: function() {
        return 'foo';
    },
    valueOf: function() {
        return 2;
    }
};

console.log( foo ); // выведет объект
console.log( foo + 1 );// 3
console.log( foo + "3" );// 23