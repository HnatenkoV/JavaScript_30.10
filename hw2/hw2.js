//1. Чому будуть дорівнювати значення змінніх a, b та result після виконання наступних операцій?.
// let a = 1 + 3 - 5 * 2;
// let b;
// b = 2 ** 3 / 5;
// const c = 7;
// let result = a + b * c;

console.log('=======1=======');
let a1;
a1 = 1 + 3 - 5 * 2;

console.log('a =',a1);
let b1;
b1 = 2 ** 3 / 5;
console.log('b =',b1);
const c1 = 7;

let result;
result= a1 + b1 * c1;

console.log('result =',result);

// 2. Розв"яжіть за допомогою мови програмування JS квадратне рівняння 4x^2 - 5x + 1 = 0
console.log('=======2=======');

let a = 4;
let b = -5;
let c = 1;
let D;
let x1;
let x2;

D = b ** 2 - 4 * a * c
console.log('D =',D);
x1 = (-b + D ** (1/2)) / (2 * a);
x2 = (-b - D ** (1/2)) / (2 * a);

console.log('x1 =',x1);
console.log('x2 =',x2);


