//Что выведет alert в этом коде? Почему?

var user = {
    firstName: "Василий",

    export: this
};

console.log( user.export.firstName ); //undefined
// console.log( user );
// console.log(user.export.w);