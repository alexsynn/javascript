/*
Задача из 5 шагов-строк:

Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».
Массив в результате каждого шага:
 */


/*var styles = ['Джаз', 'Блюз'];
styles[styles.length] = 'Рок-н-Ролл';
styles[styles.length-1] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Рэгги');*/


var styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-Ролл');

styles[styles.length - 2] = 'Классика';

console.log(styles.shift());

styles.unshift('Рэп', 'Рэгги');


console.log('zzzzzzzzzzzz');
for (var i = 0; i <= styles.length - 1; i++) {
    console.log(styles[i]);

}
