// №1: Гра Вгадай число
// Напишіть невеличку гру, яка за допомогою браузерної команди prompt() буде запитувати користувача ввести будь-яке число. Далі потрібно перевірити:
//     Якщо число більше або дорівнює 123 - програма зупиняється, виводячи текстове повідомлення Wow, you've ended this endless cycle!;
// Якщо введене число менше від 123 - вивести текстове Should continue та продовжувати запитувати користувача про введення далі;
// Якщо користувач ввів не числове значення - вивести текстове повідомлення Only numbers, please та знову запитувати ввести значення.

console.log('=================1)=================');
// let someVar = prompt('введіть будь яке число');;
// while (true) {
//     if (isNaN(someVar)) {
//         console.log('Only numbers, please');
//     } else if (someVar >= 123) {
//         console.log("Wow, you've ended this endless cycle!");
//         break;
//     } else  {
//         console.log('Should continue');
//     }
// }

let someVar;

do {
    someVar = prompt('введіть будь яке число');
    if (isNaN(someVar)) {
        console.log('Only numbers, please');
    } else if (someVar >= 123) {
        console.log("Wow, you've ended this endless cycle!");
        break;
    } else  {
        console.log('Should continue');
    }
} while(isNaN(someVar) || someVar < 123);  //<----------- виправив

// №2 Сума та добуток діапазону чисел
// За допомогою браузерної команди prompt() почергово запросити у користувача 2 різних числа. В залежності від того, що ввів користувач:
//     Якщо будь-яке введене значення не є числом - повторити запит на введення даних з текстом Only numbers, please;
// Якщо обидва значення числові - вивести добуток всіх парних чисел та суму всіх не парних чисел у заданому діапазоні. Діапазон - числа між значеннями, що їх ввів користувач, включаючи самі значення. Вивід відформатувати з використанням повідомлень Сума = {значення суми} та Добуток = {значення добутку} (фігурні дужки самі по собі не потрібні, тут лиш для відображення форматування).
// Приклади:
//     Введено значення 5 та 15, результат роботи програми: Сума = 60 (5 + 7 + 9 + 11 + 13 + 15), Добуток = 80640 (6 * 8 * 10 * 12 * 14)
// Введено значення 20 та 7, результат роботи програми: Сума = 91 (7 + 9 + 11 + 13 + 15 + 17 + 19), Добуток = 77414400 (8 * 10 * 12 * 14 * 16 * 18 * 20)
//
console.log('=================2)=================');

let someNum1;
let someNum2;
let sum = 0;
let prod = 1;

// do {someNum1 = prompt('введіть перше числове значення');
//     if (isNaN(parseInt(someNum1))) {
//         console.log('Only numbers, please');
//     }
//     someNum2 = prompt('введіть друге числове значення');
//     if (isNaN(parseInt(someNum2))) {
//         console.log('Only numbers, please');
//     }
// } while (isNaN(parseInt(someNum1)) || isNaN(parseInt(someNum2))) ;
// //
// // do {someNum2 = prompt('введіть друге числове значення');
// //     if (isNaN(parseInt(someNum2))) {
// //         console.log('Only numbers, please');
// //     }
// // } while (isNaN(parseInt(someNum2))) ;
//
//         someNum1 = parseInt(someNum1);
//         someNum2 = parseInt(someNum2);
//
//         for (let i = someNum1; i <= someNum2; i++ ) {
//             if (i % 2 !== 0) {
//                 sum += i;
//                 }
//             else {
//                 prod *= i;
//             }
//         }
//         console.log(`Введено значення ${someNum1} та ${someNum2}, результат роботи програми: Сума = ${sum}, Добуток = ${prod}`);


do {
    someNum1 = prompt('введіть перше числове значення');
    someNum2 = prompt('введіть друге числове значення');
    if (isNaN(parseInt(someNum1)) || isNaN(parseInt(someNum2))) {
        console.log('Введено некоректне число. Будь ласка, введіть числове значення.');
        continue;
    }
    someNum1 = parseInt(someNum1);
    someNum2 = parseInt(someNum2);

    for (let i = someNum1; i <= someNum2; i++) {
        if (i % 2 !== 0) {
            sum += i;
        } else {
            prod *= i;
        }
    }
    console.log(`Введено значення ${someNum1} та ${someNum2}, результат роботи програми: Сума = ${sum}, Добуток = ${prod}`);
    break;
} while (isNaN(parseInt(someNum1)) || isNaN(parseInt(someNum2)));