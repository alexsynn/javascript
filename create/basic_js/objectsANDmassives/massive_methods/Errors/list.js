//Вывод списка в цикле
function printList(list) {
    var tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

//********************************************

//Вывод списка с рекурсией
function recurcion(list) {

    console.log(list.value);
    if (list.next) {
        recurcion(list.next);
    }
}

//********************************************
//Обратный вывод с рекурсией
function backrecurcion(list) {

    if (list.next) {
        backrecurcion(list.next);
    }
    console.log(list.value);
}

//********************************************
//Обратный вывод без рекурсии
function reverslist(list) {
    var tmp = list;
    var Arr = [];

    while (tmp) {
        Arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (var i = Arr.length - 1; i >= 0; i--) {
        console.log(Arr[i]);
    }

}

var list = {value: 1};
list.next = {value: 2};
list.next.next = {value: 3};
list.next.next.next = {value: 4};
list.next.next.next.next = {value: 5};
list.next.next.next.next.next = {value: 6};
list.next.next.next.next.next.next = {value: 7};
list.next.next.next.next.next.next.next = {value: 8};
list.next.next.next.next.next.next.next.next = {value: 9};

printList(list);
console.log("////////////////////////////////////");

recurcion(list);
console.log("////////////////////////////////////");

backrecurcion(list);
console.log("////////////////////////////////////");

reverslist(list);
console.log(" rev////////////////////////////////////");

printList(list);
