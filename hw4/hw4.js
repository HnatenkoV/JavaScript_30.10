// №1. FizzBuzz game
// За допомогою браузерногої команди prompt() запросити користувача ввести будь-яке число.
//     Далі, в залежності від того, яке число ввів користувач, вивести відповідне повідомлення:
//     Fizz, якщо число ділиться на 3 без залишку;
// Buzz, якщо число ділиться на 5 без залишку;
// FizzBuzz, якщо число одночасно ділиться на 3 та на 5 без залишку;
// Non Divisible, якщо число не ділиться на 3 чи на 5.
//
//
console.log("=================1)=================");

let someNum = prompt("введіть будь яке число");

if (isNaN(someNum)) {
    console.log("введене значення не э числом")
} else if (someNum % 3 === 0 && someNum % 5 === 0) {
    console.log("FizzBuzz")
} else if (someNum % 3 === 0) {
    console.log("Fizz")
} else if (someNum % 5 === 0) {
    console.log("Buzz")
} else {
    console.log("Non Divisible")
}     // <----------перший спосіб

if (!isNaN(someNum)) {
    switch (true) {
        case someNum % 3 === 0 && someNum % 5 === 0:
            console.log("FizzBuzz");
            break;
        case someNum % 3 === 0:
            console.log("Fizz");
            break;
        case someNum % 5 === 0:
            console.log("Buzz");
            break;
        default:
            console.log("Non Divisible");
    }
} else {
    console.log("введене значення не э числом");
} // <----------------другий спосіб


// №2. Що ввів користувач?
//     За допомогою браузерногої команди prompt() запросити користувача ввести будь-яке значення.
//     Далі, в залежності від того, що ввів користувач, вивести відповідний тип даних за допомогою повідомлення You entered a {type}. Якщо визначити тип даних однозначно не можливо - виводимо повідомлення You entered a complex data.
//     Нарпиклад, користувач ввів:
//     18 -> You entered a number;
// smth different -> You entered a string;
// False -> You entered a boolean;
// smth 18 very True -> You entered a complex data;
// Будьте уважні! Зверніть увагу на те, в якому регістрі введено дані (lower/upper case) - False та false мають бути однаково визначені як тип boolean.
//     При вирішенні цих задач також зверніть увагу на обробку виключень: якщо, на вашу думку, вони можуть виникнути - використовуйте відповідну та коректну конструкцію коду для цього.

console.log("=================2)=================");

let someInfo = prompt("введіть будь яке значення");


    switch (true) {
        case someInfo.toLowerCase() === 'true' || someInfo.toLowerCase() === 'false':
            console.log("You entered a boolean;");
            break;
        case !isNaN(someInfo) :
            console.log("You entered a number");
            break;
        default:
            console.log("You entered a complex data;");
    }  //<----------------- перший спосіб


if (someInfo.toLowerCase() === 'true' || someInfo.toLowerCase() === 'false') {
    console.log('You entered a boolean');
} else if (!isNaN(someInfo)) {
    console.log('You entered a number');
} else {
    console.log('You entered a complex data;');
}  //<----------------- перший спосіб
