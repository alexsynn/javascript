//Создать Calculator при помощи конструктора
//Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
//
// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.
// Пример использования:
//
// var calculator = new Calculator();
// calculator.read();
//
// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );

function Calculator() {
    this.read = function () {
        var a = prompt('Enter a', '');
        if ((a !== '') && (isNaN(+a) === false)) {
            this.a = +a;
            var b = prompt('Enter b', '');
            if ((b !== '') && (isNaN(+b) === false)) {
                this.b = +b;
            } else {
                console.log('It is not a number');
                this.b = 0;
                this.a = 0;
            }
        } else {
            console.log('It is not a number');
            this.a = 0;
            this.b = 0;
        }
    },
        this.sum = function () {
            return this.a + this.b;
        },

        this.mul = function () {
            return this.a * this.b;
        }
}

var calculator = new Calculator();
calculator.read();

alert("Сумма=" + calculator.sum());
alert("Произведение=" + calculator.mul());