// спробую описати свої дії:
// створюю функцію memoize з аргументом defaultValue який по дефолту дрівнює null,функія memoize повертає массив данних [getData, setData];
// далі оголошую змінну memoData та присвоюю ій початкове значення defaultValue
// далі оголошую внутрішню функцію getData яка повернене мені memoData з відповідно поточним значенням
// наступним етапом оголошую функцію setData аргументом newValue результатом роботи якої буде повернення memoData але вже зі значенням яке я передаю через newValue

function memoize(defaultValue = null) {

    let memoData = defaultValue;

    const getData = function () {
        return memoData;
    }

    const setData = function (newValue) {
        return memoData = newValue;
    }

    return [getData, setData];

}

const memData = memoize();
const getMemData = memData[0];
const setMemData = memData[1];
console.log(getMemData()) // поверне undefined
setMemData(3)
console.log(getMemData()) // 3
console.log(setMemData('some string'))
setMemData({ a: 'b' })
console.log(getMemData()) // поверне { a: 'b' }


const memData1 = memoize([1, 2, 3]);
const getMemData1 = memData1[0];
const setMemData1 = memData1[1];
console.log(getMemData1()) // поверне [1, 2, 3]
setMemData1('test')
console.log(getMemData1()) // поверне 'test'