// 1. Яким буде результат виконання кожної з наступних строк коду та чому? Напишіть відповіді для кожної строки коду та коротке пояснення.

console.log('==================1================')
// '12' + 34  =  // ?
let a = '12' + 34
console.log("'12' - " + typeof '12')
console.log("34 - " + typeof 34)
console.log(a + ' якщо до значення типу "string" додати тип "number" то це буде виконуватись конкатинація цих значень')
console.log('----------------------------------')
// 12 + 34    // ?
let b = 12 + 34
console.log('12 - ' + typeof 12)
console.log('12 - ' + typeof 34)
console.log(b + ' якщо до значення типу "number" додати тип "number" то це буде виконуватись операція додавання')
console.log('----------------------------------')
// 100 / '10' // ?
let c = 100 / '10'
console.log('100 - ' + typeof 100)
console.log("'10' - " + typeof '10')
console.log(c + ' якщо до значення типу "number" поділити на тип "string" то буде виконуватись операція ділення осільки в даному випадку значення типу "string" буде перетворено на значення типу "number" ')
console.log('----------------------------------')
// 100 * 'f'  // ?
let d = 100 * 'f'
console.log('100 - ' + typeof 100)
console.log("'f' - " + typeof 'f')
console.log(d + ' якщо значення типу "number" помножити на "string" то в даному випадку отримаємо помилку перетворення NaN оскільки така операція є помилковою')
console.log('----------------------------------')
// '7' / null // ?
let e = '7' / null
console.log("'7' - " + typeof '7')
console.log("null - " + typeof null)
console.log(e + ' якщо значення типу "string" поділити на null то значення типу "string" буде перетворено на значення типу "number" и результатом виконання даної операції буде безкінечність ')

console.log('==================2================')

// 2. Нижче наведено дані та результат, який потрібно отримати (після стрілочки ->). Напишіть код для отримання заданого результату (всі відомі вам варіанти):

console.log("---------------'2' + '4' -> 6 (алгебраїчна сума)-------------------")
let x = parseInt('2');
let y = parseInt ('4');
let someRes1 = x + y;
console.log(someRes1)

let x2 = Number('2');
let y2 = Number ('4');
let someRes2 = x2 + y2;
console.log(someRes2)

console.log("--------------- 7.2 / '1.2' -> 6 (ділення двох чисел)-------------------")
let someVal1 = 7.2;
let someVal2 = '1.2';
let someRes3 = someVal1 / someVal2;
console.log(someRes3)
let someVal3 = Number ('1.2');
let someRes4 = someVal1 / someVal3;
console.log(someRes4)

console.log("----------------'this' + ' simple' + ' string' -> 'this simple string' (конкатенація строк)------------------")

let someStr1 = 'this';
let someStr2 = ' simple';
console.log(someStr1 + someStr2 + someStr2);

let someRes5 = someStr1 + someStr2 + someStr2;
console.log(someRes5)

console.log("----------------'answer' + ' is:' + '30' + 5 -> 'answer is 35' (сума з конкатенацією)------------------")

let someStr3 = 'answer';
let someStr4 = ' is ';
let someStr5 = parseInt('30');
let someNum = 5;

let someRes6 = someStr3 + someStr4 + (someStr5 + someNum);
console.log(someRes6)

console.log('answer' + ' is ' + (Number('30') + 5));


