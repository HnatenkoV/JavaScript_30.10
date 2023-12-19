const someFn = (param1, param2, ...paramN) => {
    return [param1, param2, ...paramN]; // тут повертаю параметри функції someFn
};

function loggingDecorator(funcName) {
   return  function (...arg) {
       const functionName = funcName.name; //тут роблю змінну functionName яка містить імя функії з її властивістю name

       let argsString = ''; //тут роблю змінну яка містить всі аргументи передані у функцію

       for (let i = 0; i < arg.length; i++) {
           argsString += arg[i];
           if (i < arg.length - 1) {
               argsString += ', ';
           }
       } // тут використовую цикл щоб вивести через кому всі аргументи
       console.log(functionName + ', args: ' + argsString); //тут виводжу в консоль імя функції та всі аргументи

       const res = funcName.apply(null, arg);
       return res; //тут створюю змінну res куди зберігаю результат виклику функції і повертаю його
   }
}

console.log(someFn('test', 11, 5));
const loggedFn = loggingDecorator(someFn);
loggedFn(1, 2, 3) // має вивести у консоль someFn, args: 1, 2, 3
loggedFn('test') // має вивести у консоль someFn, args: test