// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const sum = arr.reduce((accum, currentValue) => {
    return currentValue > 0 ? accum + currentValue : accum;
}, 0);

console.log(`Sum: ${sum}`);

const quantity = arr.reduce((accum, currentValue) => {
    return currentValue > 0 ? accum + 1 : accum;
}, 0);

console.log(`Quantity: ${quantity}`);



// Знайти мінімальний елемент масиву та його порядковий номер.

const min = arr.reduce((accum, currentValue) => {
    return currentValue < accum ? accum = currentValue : accum;
}, 0);

console.log(`Min: ${min}`);

let minIndex = arr.indexOf(min);

console.log(`Index of min: ${minIndex}`);



// Знайти максимальний елемент масиву та його порядковий номер.

const max = arr.reduce((accum, currentValue) => {
    return currentValue > accum ? accum = currentValue : accum;
}, 0);

console.log(`Max: ${max}`);

const maxIndex = arr.indexOf(max);

console.log(`Index of max: ${maxIndex}`);



// Визначити кількість негативних елементів.

const negative = arr.reduce((accum, currentValue) => {
    return currentValue < 0 ? accum + 1 : accum;
}, 0);

console.log(`Quantity of negative values: ${negative}`);



// Знайти кількість непарних позитивних елементів.

const unpairedPositive = arr.reduce((accum, currentValue) => {
    return currentValue > 0 && currentValue % 2 !== 0 ? accum + 1 : accum;
}, 0);

console.log(`Quantity of unpaired positive values: ${unpairedPositive}`);



// Знайти кількість парних позитивних елементів.

const pairedPositive = arr.reduce((accum, currentValue) => {
    return currentValue > 0 && currentValue % 2 === 0 ? accum + 1 : accum;
}, 0);

console.log(`Quantity of paired positive values: ${pairedPositive}`);



// Знайти суму парних позитивних елементів.

const sumPairedPositive = arr.reduce((accum, currentValue) => {
    return currentValue > 0 && currentValue % 2 === 0 ? accum + currentValue : accum;
}, 0);

console.log(`Sum of paired positive values: ${sumPairedPositive}`);



// Знайти суму непарних позитивних елементів.

const sumUnpairedPositive = arr.reduce((accum, currentValue) => {
    return currentValue > 0 && currentValue % 2 !== 0 ? accum + currentValue : accum;
}, 0);

console.log(`Sum of unpaired positive values: ${sumUnpairedPositive}`);



// Знайти добуток позитивних елементів.

const multy = arr.reduce((accum, currentValue) => {
    return currentValue > 0 ? accum * currentValue : accum;
}, 1);

console.log(`Multiplication: ${multy}`);



// Знайти найбільший серед елементів масиву, остальні обнулити.

let newArr = arr.map(value => value === max ? value : 0);

arr.splice(0);

newArr.forEach(value => arr.push(value));

console.log(arr);