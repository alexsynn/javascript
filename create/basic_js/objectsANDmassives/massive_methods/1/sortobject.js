var vasya = {name: "Вася", age: 23};
var masha = {name: "Маша", age: 18};
var vovochka = {name: "Вовочка", age: 6};

var people = [vasya, masha, vovochka];

people.sort(function (a, b) {
    var c = a.age,
        d = b.age;
    return c - d;
});

for (var i = 0; i < people.length; i++) {

    console.log(people[i].name);
}
console.log(people[0].name);

