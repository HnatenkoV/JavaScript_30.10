console.log('=============1. Пошук максимального числа=============')

function min (array) {
    if (array.length === 0) {
        console.log(null);
        return;
    }

    let min = array[0];

    for (let i = 0; i < array.length ; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    console.log(min);
} //<------- для пошуку мінімального значення

function max (array) {
    if (array.length === 0) {
        console.log(null);
        return;
    }

    let max = array[0];

    for (let i = 0; i < array.length ; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    console.log(max);
} //<------- для пошуку максимального значення

function minMax (array) {
    if (array.length === 0) {
        console.log(null);
        return;
    }
    let min = array [0];
    let max = array[0];

    for (let i = 0; i < array.length ; i++) {
        if ( array[i] < min) {
            min = array[i];
        } else if (array[i] > max) {
            max = array[i]
        }
    }

    console.log('value min:', min);
    console.log('value max:', max);
}   //<------- для пошуку одразу і мінімального, і максимального значення



const arr = [3, 1, -9, -3, 2, 8];
const arr1 = [1, 7, 5, 6, 0];
const arr2 = [];
minMax(arr);
minMax(arr1);
minMax(arr2);
// min(arr);
// min(arr1);
// min(arr2);
// max(arr);
// max(arr1);
// max(arr2);

console.log('=============2. Чи паліндром я?=============')

function palindrome (palindromeWord) {
    if (palindromeWord.length === 0) {
        console.log(`'${palindromeWord}' ---> 'false'`);
        return;
    }

    let reverseWord = '';

    for (let i = 0; i < palindromeWord.length; i++) {
        reverseWord = palindromeWord[i] + reverseWord;
    }

    (palindromeWord === reverseWord) ? console.log(`'${palindromeWord}' ---> 'true'`) : console.log(`'${palindromeWord}' ---> 'false'`);
} // можна ще додати palindromeWord = palindromeWord.toLowerCase() щоб привести всі букви до нижньго регістру

palindrome('');
palindrome('mom');
palindrome('string');


console.log('=============3. Із строки у число=============')

function strToInt (someStr) {
    let result = 0;
    for (let i = 0; i < someStr.length; i++) {
        let someChar = someStr[i] - '0';
        if (someChar >= '0' && someChar <= '9') {
            result = result * 10 + someChar;
        } else {
            break;
        }
    }
    return result;
}

console.log(strToInt('15'));
console.log(strToInt('376'));

function strToInt2 (someStr, newSystem) {
    let result = 0;
    for (let i = 0; i < someStr.length; i++) {
        let someChar = someStr[i] - '0';
        if (someChar >= '0' && someChar <= '9') {
            result = result * newSystem + someChar;
        } else {
            break;
        }
    }
    return result;
} //<----- аби можна було задавати строку та довільну систему числення потрібно оголосити в функції ще 1 параметр newSystem відповідно цім параметром я задаю систему числення

console.log(strToInt2 ('101', 2));
console.log(strToInt2 ('101', 5));