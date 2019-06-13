//Что выведет alert в этом коде? Почему?

var name = "";

var user = {
    name: "Василий",

    export: function() {
        return this;
    }

};

console.log( user.export().name );//Василий