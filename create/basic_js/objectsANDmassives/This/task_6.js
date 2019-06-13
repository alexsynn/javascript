//Что выведет alert в этом коде? Почему?

var name = "";

var user = {
    name: "Василий",

    export: function() {
        return {
            value: this
        };
    }

};

console.log( user.export().value.name );
//Василий, потому что this в контексте вызова функции и становится глобальным, это clouser - берет данные из user.